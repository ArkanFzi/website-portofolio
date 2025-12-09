namespace MyPostgreApi.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty; // e.g., Frontend, Backend, Database
        public int Proficiency { get; set; } // 1-100
    }
}
