import Header from "@/components/Header";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-4 sm:pt-6">
        <Downloads />
      </div>
      <Footer />
    </div>
  );
}


