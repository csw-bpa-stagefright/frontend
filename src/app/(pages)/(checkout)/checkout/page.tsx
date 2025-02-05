import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import CheckoutPageContents from "./components/CheckoutPageContents";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";

const CheckoutPage = () => {
	return (
		<>
			<VoiceAssistant />
			<CheckoutPageContents />
		</>
	)
}

export default CheckoutPage;
