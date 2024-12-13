import DefaultNavbar from "@/~/libs/components/global/Navbar/DefaultNavbar";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";

const ConcertViewPage = async ({
	params,
}: {
	params: Promise<{ concertId: string }>
}) => {
	const concertId = (await params).concertId;

	return (
		<>
			<DefaultNavbar whitebg />
			<div className="w-[1000px] ml-auto mr-auto px-3 mt-12">
				<Link href={"/concerts"} className="flex items-center justify-start w-fit gap-3 opacity-50 hover:underline"><ArrowLeft size={15} /> Go Back</Link>
			</div>
		</>
	)
}

export default ConcertViewPage;
