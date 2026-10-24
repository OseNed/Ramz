import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Platform } from "@/components/platform";
import { HowItWorks } from "@/components/how-it-works";
import { Frameworks } from "@/components/frameworks";
import { Audience } from "@/components/audience";
import { EarlyAccess } from "@/components/early-access";
import { Footer } from "@/components/footer";
import { ScrollEffects } from "@/components/scroll-effects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <HowItWorks />
        <Frameworks />
        <Audience />
        <EarlyAccess />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
