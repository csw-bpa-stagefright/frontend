import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import { getCookie } from "cookies-next/server";
import { permanentRedirect } from "next/navigation";
import React from "react";
import DashboardContents from "./components/DashboardContent";

const DashboardPage = () => {
	return (
		<>
			<DefaultNavbar whitebg />
			<section className="w-screen relative max-w-[1050px] mx-auto mt-5 px-5">
				<DashboardContents />
			</section>
		</>
	)
}

export default DashboardPage;
