import ApproachUs from "@/components/custom/ApproachUs";
import Clients from "@/components/custom/Clients";
import Experience from "@/components/custom/Experience";
import Footer from "@/components/custom/Footer";
import Grid from "@/components/custom/Grid";
import Hero from "@/components/custom/Hero";
import RecentProjects from "@/components/custom/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full m-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <ApproachUs />
        <Footer/>
      </div>
    </main>
  );
}
