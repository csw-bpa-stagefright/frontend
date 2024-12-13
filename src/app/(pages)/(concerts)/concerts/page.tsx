import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import React from "react";
import ConcertsDisplay from "./components/ConcertsDisplay";

const ConcertsPage = () => {
	return (
		<>
			<DefaultNavbar whitebg />
			<ConcertsDisplay />
		</>
	)
}

export default ConcertsPage;
