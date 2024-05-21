import TopBar from "@/components/TopBar/TopBar";
import Hero from "@/components/Landing/HeroSection/Hero";
import HowItWorks from "@/components/Landing/HowItWorks/HowItWorks";
import Footer from "@/components/shared/Footer/Footer";
export default function Home() {
  return (
    <main>
      <TopBar></TopBar>
      <Hero></Hero>
      <HowItWorks/>
      <Footer/>
    </main>
  );
}
