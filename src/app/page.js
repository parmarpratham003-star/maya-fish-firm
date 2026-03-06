import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Hero   from "../Component/Hero"
import FishVarieties from "@/Component/FishVarieties";
import AboutMayaFish from "@/Component/AboutMayaFish";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMayaFish/>
      <FishVarieties/>
      <Footer />
    </div>
  );
}