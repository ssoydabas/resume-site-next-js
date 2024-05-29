import { Id } from "./_components/Id";
import { Skills } from "./_components/Skills";
import { WorkHistory } from "./_components/WorkHistory";
import { AboutMe } from "./_components/AboutMe";
import { Projects } from "./_components/Projects";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between px-2 sm:px-8 md:px-12 py-8">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-y-8 w-full">
        <Id />
        <Skills />
        <WorkHistory />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
