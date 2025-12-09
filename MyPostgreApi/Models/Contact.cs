namespace MyPostgreApi.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public DateTime SubmittedDate { get; set; } = DateTime.UtcNow;
    }
}
