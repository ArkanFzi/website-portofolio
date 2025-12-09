import Navigation from "../components/Navigation";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
    </div>
  );
}
