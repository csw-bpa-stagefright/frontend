import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import ConcertsDisplay from "./components/ConcertsDisplay";
import VoiceAssistant from "@/~/libs/components/global/VoiceAssistant/VoiceAssistant";

const ConcertsPage = () => {
	return (
		<>
			<VoiceAssistant />
			<DefaultNavbar whitebg />
			<ConcertsDisplay />
		</>
	)
}

export default ConcertsPage;
