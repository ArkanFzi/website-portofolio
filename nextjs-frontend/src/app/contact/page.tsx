import Navigation from "../components/Navigation";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
}
