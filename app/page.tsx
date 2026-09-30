import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Collections from "@/components/Collections";
import Lookbook from "@/components/Lookbook";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import SizeGuide from "@/components/SizeGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <NewArrivals />
      <Collections />
      <Lookbook />
      <About />
      <Testimonials />
      <SizeGuide />
      <Footer />
    </main>
  );
}
