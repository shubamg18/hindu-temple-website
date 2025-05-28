import Image from "next/image";
import HeroSlider from "./components/content/HeroSlider/HeroSlider";
import InfoCards from "./components/content/InfoCards/InfoCards";
import TempleFeatures from "./components/content/TempleFeatures/TempleFeatures";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <InfoCards />
      <TempleFeatures />
    </div>
  );
}
