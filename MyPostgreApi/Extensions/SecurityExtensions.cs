using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;

namespace MyPostgreApi.Extensions;

public static class SecurityExtensions
{
    public static void ConfigureCors(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy", builder =>
                builder.WithOrigins("http://localhost:3000") // Strict Origin
                       .AllowAnyMethod()
                       .AllowAnyHeader());
        });
    }

    public static void ConfigureRateLimiting(this IServiceCollection services)
    {
        services.AddRateLimiter(options =>
        {
            options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
            {
                return RateLimitPartition.GetFixedWindowLimiter(
                    partitionKey: context.Connection.RemoteIpAddress?.ToString() ?? context.Request.Headers.Host.ToString(),
                    factory: partition => new FixedWindowRateLimiterOptions
                    {
                        AutoReplenishment = true,
                        PermitLimit = 100, // 100 requests
                        Window = TimeSpan.FromMinutes(1) // per minute
                    });
            });

            options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
        });
    }

    public static void ConfigureSecurityHeaders(this IApplicationBuilder app)
    {
        app.Use(async (context, next) =>
        {
            context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
            context.Response.Headers.Append("X-Frame-Options", "DENY");
            context.Response.Headers.Append("X-XSS-Protection", "1; mode=block");
            context.Response.Headers.Append("Referrer-Policy", "strict-origin-when-cross-origin");
            context.Response.Headers.Append("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; connect-src 'self' http://localhost:3000;");
            
            await next();
        });
    }
}
