import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
    return (
        <main className="no-vertical-scroll text-white">
            <HeroSection />
            <AboutUs />
            <SocialMedia />
            <Footer />
        </main>
    );
}
