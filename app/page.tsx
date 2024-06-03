import Bio from "@/components/Bio";
import Hero from "@/components/Hero";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
<main className="overflow-hidden">
  <div className="p-4">
<Hero/>
  <Bio/>

  <div className="pt-10">
    <Services/>
  </div>
  <div className="pt-10">
  <Qualifications/>
  </div>
  </div>


</main>
  );
}
