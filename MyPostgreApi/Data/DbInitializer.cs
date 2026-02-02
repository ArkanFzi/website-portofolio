using MyPostgreApi.Models;

namespace MyPostgreApi.Data;

public static class DbInitializer
{
    public static void Initialize(ApplicationDbContext context)
    {
        // Ensure database is created
        context.Database.EnsureCreated();

        // Seed Skills
        if (!context.Skills.Any())
        {
            var skills = new Skill[]
            {
                // Backend
                new Skill { Name = ".NET 9", Category = "Backend", Proficiency = 95 },
                new Skill { Name = "C#", Category = "Backend", Proficiency = 95 },
                new Skill { Name = "PostgreSQL", Category = "Backend", Proficiency = 90 },
                new Skill { Name = "Microservices", Category = "Backend", Proficiency = 85 },
                new Skill { Name = "Redis", Category = "Backend", Proficiency = 80 },
                
                // Frontend
                new Skill { Name = "Next.js 14", Category = "Frontend", Proficiency = 90 },
                new Skill { Name = "React", Category = "Frontend", Proficiency = 92 },
                new Skill { Name = "TypeScript", Category = "Frontend", Proficiency = 88 },
                new Skill { Name = "Three.js", Category = "Frontend", Proficiency = 75 },
                new Skill { Name = "Tailwind CSS", Category = "Frontend", Proficiency = 95 },

                // DevOps & Tools
                new Skill { Name = "Docker", Category = "DevOps", Proficiency = 85 },
                new Skill { Name = "Kubernetes", Category = "DevOps", Proficiency = 70 },
                new Skill { Name = "Azure", Category = "DevOps", Proficiency = 80 },
                new Skill { Name = "CI/CD", Category = "DevOps", Proficiency = 85 },
            };
            context.Skills.AddRange(skills);
        }

        // Seed Projects
        if (!context.Projects.Any())
        {
            var projects = new Project[]
            {
                new Project
                {
                    Title = "FinTech Microservices Platform",
                    Description = "A high-performance banking transaction system built with .NET 8 Microservices, RabbitMQ for event-driven architecture, and Redis for caching. Handles 10k+ transactions/sec.",
                    Technologies = ".NET 8, RabbitMQ, PostgreSQL, Docker, Kubernetes",
                    ImageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                    ProjectUrl = "https://github.com/ArkanFzi",
                    GithubUrl = "https://github.com/ArkanFzi",
                    CreatedDate = DateTime.UtcNow.AddMonths(-2)
                },
                new Project
                {
                    Title = "AI-Powered Analytics Dashboard",
                    Description = "Real-time SaaS dashboard visualizing business metrics with predictive AI models. Features interactive charts, dark mode, and seamless Next.js server actions.",
                    Technologies = "Next.js, TypeScript, Tremor UI, OpenAI API, Supabase",
                    ImageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                    ProjectUrl = "https://github.com/ArkanFzi",
                    GithubUrl = "https://github.com/ArkanFzi",
                    CreatedDate = DateTime.UtcNow.AddMonths(-5)
                },
                new Project
                {
                    Title = "Immersive 3D Portfolio",
                    Description = "This website! A modern portfolio featuring 3D interactive elements, glassmorphism UI, and a secure .NET backend. Optimized for performance and SEO.",
                    Technologies = "Next.js, Three.js, R3F, .NET, Tailwind CSS",
                    ImageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
                    ProjectUrl = "https://github.com/ArkanFzi",
                    GithubUrl = "https://github.com/ArkanFzi",
                    CreatedDate = DateTime.UtcNow
                }
            };
            context.Projects.AddRange(projects);
        }

        context.SaveChanges();
    }
}
