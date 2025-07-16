import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Initiatives from "../components/Initiatives";
import Timeline from "../components/Timeline";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="no-vertical-scroll text-white">
            <HeroSection />
            <AboutUs />
            <Initiatives />
            <Timeline />
            <SocialMedia />
            <Footer />
        </main>
    );
}
