import Bio from "@/components/Marley/Bio";
import Hero from "@/components/Marley/Hero";
import Qualifications from "@/components/Marley/Qualifications";
import Services from "@/components/Marley/Services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="p-4">
        <Hero />
        <Bio />

        <div className="pt-10">
          <Services />
        </div>
        <div className="pt-10">
          <Qualifications />
        </div>
      </div>
    </main>
  );
}
