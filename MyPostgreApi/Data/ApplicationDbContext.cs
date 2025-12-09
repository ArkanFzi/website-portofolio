using Microsoft.EntityFrameworkCore;
using MyPostgreApi.Models;

namespace MyPostgreApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        // public DbSet<Order> Orders { get; set; } // Contoh lain
    }
}
