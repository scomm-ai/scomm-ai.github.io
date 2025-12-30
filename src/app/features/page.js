import Header from "@/components/Header";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-8 sm:pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
}


