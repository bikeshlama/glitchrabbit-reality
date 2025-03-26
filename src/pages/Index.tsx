
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { HowToBuy } from "@/components/HowToBuy";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Community />
      <HowToBuy />
      <Footer />
    </div>
  );
};

export default Index;
