import React from "react";

// Component Imports 
import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import LoginFormWrapper from "./components/LoginFormWrapper";

import { Toaster } from "react-hot-toast";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";
import Footer from "@/~/libs/components/global/Footer/Footer";

const LoginPage = () => {
  return (
    <>
      <VoiceAssistant />
      <Toaster />
      <DefaultNavbar
      hideMiddleLinks
      whitebg
      />
      <LoginFormWrapper />
      <Footer />
    </>
  );
}

export default LoginPage;