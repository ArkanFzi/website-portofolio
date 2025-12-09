using Microsoft.EntityFrameworkCore;
using MyPostgreApi.Models; // Ganti jika Anda menggunakan namespace atau folder berbeda

namespace MyPostgreApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // --- Tambahkan DbSet untuk setiap tabel di Postgre Anda ---
        public DbSet<Product> Products { get; set; }
        // public DbSet<Order> Orders { get; set; } // Contoh lain
    }
}