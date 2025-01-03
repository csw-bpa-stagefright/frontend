import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import { API_URL } from "@/~/libs/global/api";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";
import axios from "axios";
import { permanentRedirect } from "next/navigation";
import { ConcertType } from "../../components/ConcertsDisplay";
import ConcertView from "./components/ConcertView";

const ConcertViewPage = async ({
	params,
}: {
	params: Promise<{ concertId: string }>
}) => {
	const concertId = (await params).concertId;

	let concert;

	try {
		concert = await axios.post(`${API_URL}/api/concert/getone`, {
			id: concertId
		});
	} catch (e) {
		console.error(e);
		permanentRedirect('/error')
	}

	console.log("CONCERT: ", concert.data);

	if (!concert || !concert.data || concert.data == "error") {
		permanentRedirect('/error')
	}

	const fetchedConcert: ConcertType = (concert.data as any).concert as ConcertType;

	return (
		<>
			<DefaultNavbar whitebg />
			<div className="w-[1000px] ml-auto mr-auto px-3 mt-12">
				<Link href={"/concerts"} className="flex items-center justify-start w-fit gap-3 opacity-50 hover:underline"><ArrowLeft size={15} /> Go Back</Link>
				<ConcertView concert={fetchedConcert} />
			</div>
		</>
	)
}

export default ConcertViewPage;
