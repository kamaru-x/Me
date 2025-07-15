import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Initiatives from "../components/Initiatives";

export default function Home() {
    return (
        <main className="no-vertical-scroll text-white">
            <HeroSection />
            <AboutUs />
            {/* <Initiatives /> */}
        </main>
    );
}
