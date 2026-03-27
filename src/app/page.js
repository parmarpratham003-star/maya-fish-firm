import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Hero   from "../Component/Hero"
import KeyServices from "@/Component/KeyServcices";
import AboutMayaFish from "@/Component/AboutMayaFish";
import WhyChooseMaya from "@/Component/WhyChooseMaya";
import CallToAction from "@/Component/CallToAction";
import StatsSection from "@/Component/StatsSection";
import Footer1 from "../Component/Footer1";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMayaFish/>
      <StatsSection/>
      <KeyServices/>
      <CallToAction/>
      <WhyChooseMaya/>   
    
      <Footer1 />
    </div>
  );
}