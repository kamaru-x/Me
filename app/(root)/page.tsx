import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import SocialMedia from "../components/SocialMedia";
import Initiatives from "../components/Initiatives";

export default function Home() {
    return (
        <main className="no-vertical-scroll text-white">
            <HeroSection />
            <AboutUs />
            <Initiatives />
            <SocialMedia />
            <Footer />
        </main>
    );
}
