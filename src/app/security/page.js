import Header from "@/components/Header";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        <Security />
      </div>
      <Footer />
    </div>
  );
}


