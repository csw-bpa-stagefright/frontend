import React from "react";
import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "@/~/libs/components/global/Footer/Footer";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Reviews from "./components/reviews/Reviews";

const HomePage = () => {
    return (
        <>
            <VoiceAssistant />
            <DefaultNavbar />
            <HeroSection />
            <SectionTwo />
            <Reviews />
            <div className="my-12" />
            <Footer />
            <div className="bg-[#edebe7] w-full h-[100vh] fixed left-0 top-0 z-[-1]"></div>
        </>
    )
}

export default HomePage;
