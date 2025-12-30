import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import BackupSecurity from "@/components/BackupSecurity";
import Comparison from "@/components/Comparison";
import ProFeatures from "@/components/ProFeatures";
import Platforms from "@/components/Platforms";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <WhyUs />
      <Comparison />
      <BackupSecurity />
      <Platforms />
      <ProFeatures />
      <CTA />
      <Footer />
    </div>
  );
}
