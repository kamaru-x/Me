import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";

export default function Home() {
    return (
        <main className="no-vertical-scroll text-white">
            <HeroSection />
            <AboutUs />
        </main>
    );
}
