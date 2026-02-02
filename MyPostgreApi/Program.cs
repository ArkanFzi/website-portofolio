using Microsoft.EntityFrameworkCore;
using MyPostgreApi.Data;
using MyPostgreApi.Extensions;
using MyPostgreApi.Models;

var builder = WebApplication.CreateBuilder(args);

// --- 1. Konfigurasi Layanan (Optimization & Security) ---
builder.Services.ConfigureCors();
builder.Services.ConfigureRateLimiting();
builder.Services.ConfigureResponseCompression();
builder.Services.ConfigureOutputCaching();

// Konfigurasi Database PostgreSQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (connectionString != null)
{
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(connectionString));
}
else
{
    Console.WriteLine("Connection string 'DefaultConnection' tidak ditemukan.");
}

// Swagger/OpenAPI for .NET 8 (Swashbuckle)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// --- 2. Konfigurasi Pipeline HTTP ---

// Seed Database
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<ApplicationDbContext>();
        DbInitializer.Initialize(context);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred creating the DB.");
    }
}

app.ConfigureSecurityHeaders(); // Custom Security Headers

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");
app.UseRateLimiter(); // Apply global rate limiting
app.UseResponseCompression();
app.UseOutputCache();

app.UseHttpsRedirection();

// --- 3. Endpoints ---

// Portfolio API Endpoints - Cached for 60s
var portfolioGroup = app.MapGroup("/api").CacheOutput(); // Apply default cache policy

portfolioGroup.MapGet("/projects", async (ApplicationDbContext db) =>
    await db.Projects.OrderByDescending(p => p.CreatedDate).AsNoTracking().ToListAsync())
.WithName("GetProjects")
;

portfolioGroup.MapGet("/skills", async (ApplicationDbContext db) =>
    await db.Skills.OrderBy(s => s.Category).ThenBy(s => s.Name).AsNoTracking().ToListAsync())
.WithName("GetSkills")
;

portfolioGroup.MapGet("/about", async (ApplicationDbContext db) =>
    await db.Abouts.AsNoTracking().FirstOrDefaultAsync())
.WithName("GetAbout")
;

// Contact - No Cache
app.MapPost("/api/contact", async (Contact contact, ApplicationDbContext db) =>
{
    if (string.IsNullOrWhiteSpace(contact.Name) || string.IsNullOrWhiteSpace(contact.Email) || string.IsNullOrWhiteSpace(contact.Message))
    {
        return Results.BadRequest("All fields are required.");
    }

    db.Contacts.Add(contact);
    await db.SaveChangesAsync();
    return Results.Created($"/api/contact/{contact.Id}", contact);
})
.WithName("PostContact")
;

app.Run();