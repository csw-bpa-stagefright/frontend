import React from "react";
import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "@/~/libs/components/global/Footer/Footer";

const HomePage = () => {
    return (
        <> 
            <DefaultNavbar />
            <HeroSection />
            <Footer />
        </>
    )
}

export default HomePage;