import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import MerchDisplay from "./components/MerchDisplay";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";

const ConcertsPage = () => {
	return (
		<>
			<VoiceAssistant />
			<DefaultNavbar whitebg />
			<MerchDisplay />
		</>
	)
}

export default ConcertsPage;
