import Footer from "@/~/libs/components/global/Footer/Footer";
import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import SignupFormWrapper from "./components/SignupFormWrapper";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";

const SignupPage = () => {
    return (
        <>
            <VoiceAssistant />
            <DefaultNavbar whitebg hideMiddleLinks />
            <SignupFormWrapper />
            <Footer />
        </>
    )
}

export default SignupPage;