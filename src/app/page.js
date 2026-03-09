import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Hero   from "../Component/Hero"
import FishVarieties from "@/Component/FishVarieties";
import AboutMayaFish from "@/Component/AboutMayaFish";
import LiveFishFeed from "@/Component/LiveFishFeed";
import WhyChooseMaya from "@/Component/WhyChooseMaya";
import CallToAction from "@/Component/CallToAction";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMayaFish/>
      <FishVarieties/>
      <LiveFishFeed/>
      <WhyChooseMaya/>  
      <CallToAction/>
      <Footer/>
    </div>
  );
}