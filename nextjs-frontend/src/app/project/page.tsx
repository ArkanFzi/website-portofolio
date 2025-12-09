import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Projects />
      </div>
    </div>
  );
}
