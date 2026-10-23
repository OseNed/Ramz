import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Challenge } from "@/components/challenge";
import { Platform } from "@/components/platform";
import { BuiltForEra } from "@/components/built-for-era";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Challenge />
        <Platform />
        <BuiltForEra />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
