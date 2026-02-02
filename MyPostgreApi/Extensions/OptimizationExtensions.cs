using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;

namespace MyPostgreApi.Extensions;

public static class OptimizationExtensions
{
    public static void ConfigureResponseCompression(this IServiceCollection services)
    {
        services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
            options.Providers.Add<BrotliCompressionProvider>();
            options.Providers.Add<GzipCompressionProvider>();
        });

        services.Configure<BrotliCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest;
        });
    }

    public static void ConfigureOutputCaching(this IServiceCollection services)
    {
        services.AddOutputCache(options =>
        {
            options.AddBasePolicy(builder => builder.Expire(TimeSpan.FromSeconds(60))); // Default 60s
            options.AddPolicy("NoCache", builder => builder.NoCache());
        });
    }
}
