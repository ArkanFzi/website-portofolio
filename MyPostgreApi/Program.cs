using Microsoft.EntityFrameworkCore;
using MyPostgreApi.Data; // Pastikan Anda membuat folder Data dan ApplicationDbContext

var builder = WebApplication.CreateBuilder(args);

// Nama policy CORS yang akan kita gunakan
const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins"; 

// --- 1. Konfigurasi Layanan ---

// Konfigurasi Database PostgreSQL menggunakan EF Core
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (connectionString != null)
{
    // Daftarkan DbContext Anda untuk PostgreSQL
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(connectionString));
}
else
{
    // Opsional: Penanganan jika connection string tidak ditemukan
    Console.WriteLine("Connection string 'DefaultConnection' tidak ditemukan. Database tidak akan terkonfigurasi.");
}

// Tambahkan layanan CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          // Izinkan Next.js (Frontend) untuk mengakses API
                          policy.WithOrigins("http://localhost:3000") 
                                .AllowAnyHeader()
                                .AllowAnyMethod(); // GET, POST, PUT, DELETE
                      });
});

// Layanan standar lainnya
builder.Services.AddOpenApi(); // Untuk Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();


var app = builder.Build();

// --- 2. Konfigurasi Pipeline HTTP ---

// Hanya tampilkan Swagger/OpenAPI di lingkungan Development
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Terapkan CORS (Wajib agar Next.js bisa berkomunikasi)
app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

// --- 3. Endpoint API Contoh (Produk dari Postgre) ---

// Definisikan Endpoint API GET Sederhana
// Endpoint ini mengambil data dari PostgreSQL melalui ApplicationDbContext
app.MapGet("/api/products", async (ApplicationDbContext db) =>
{
    // Pastikan model Product dan DbSet Products ada di ApplicationDbContext
    // Jika belum ada data di database, ini akan mengembalikan array kosong []
    return await db.Products.ToListAsync(); 
})
.WithName("GetProducts")
.WithTags("Products");

// Endpoint contoh bawaan
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");


app.Run();

// Record untuk model data cuaca bawaan
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}