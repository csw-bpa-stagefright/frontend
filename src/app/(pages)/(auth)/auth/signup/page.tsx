import Footer from "@/~/libs/components/global/Footer/Footer";
import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import SignupFormWrapper from "./components/SignupFormWrapper";

const SignupPage = () => {
    return (
        <>
            <DefaultNavbar whitebg />
            <SignupFormWrapper />
            <Footer />
        </>
    )
}

export default SignupPage;