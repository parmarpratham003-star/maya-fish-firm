import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import AboutHero from "./../../Component/About/AboutHero"
import WhoWeAre from "@/Component/About/WhoWeAre";
import BreedingProcess from "@/Component/About/BreedingProcess";
import Mission from "@/Component/About/MissionVision";
import Vision from "@/Component/About/Vision";
import MissionVision from "@/Component/About/MissionVision";
export default function About() {
  return (
    <div>
      <Header />
      <AboutHero />
      <WhoWeAre />
      <BreedingProcess />
      <MissionVision/>
      <Footer />
    </div>
  );
}