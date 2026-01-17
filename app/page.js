import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <div className="mx-auto">
      <Hero/>
      <Projects/>
      <Services/>
      <About/>
      <CTA/>
   
    </div>
  );
}
