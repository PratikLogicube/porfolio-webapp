import dynamic from "next/dynamic";
import Grid from "@/components/custom/Grid";
import Hero from "@/components/custom/Hero";
const RecentProjects = dynamic(()=> import('@/components/custom/RecentProjects'))
const FloatingNav  = dynamic(()=> import('@/components/ui/FloatingNav'))
const ApproachUs  = dynamic(()=> import('@/components/custom/ApproachUs'))
const Clients  = dynamic(()=> import('@/components/custom/Clients'))
const Experience  = dynamic(()=> import('@/components/custom/Experience'))
const Footer  = dynamic(()=> import('@/components/custom/Footer'))
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
