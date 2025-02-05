'use client'

import { API_URL } from "@/~/libs/global/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Concert from "./Concert";

export type ConcertType = {
	name: string;
	description: string;
	imageUrl?: string;
	ticketCost: number;
	location: string;
	id: string;
	date: string;
}

const ConcertsDisplay = () => {
	const [concerts, setConcerts] = useState<ConcertType[]>([]);

	useEffect(() => {
		axios.post(`${API_URL}/api/concert/getmany`, {
			skip: 0,
			take: 10
		})
			.then((data) => {
				console.log(data)
				setConcerts(() => (data.data as any).concerts as ConcertType[]);
			})
			.catch((err) => {
				console.error(err)
			})

		console.log(concerts)
	}, [])

	return (
		<>
			<section className="max-w-[1100px] ml-auto mr-auto px-3 py-4">
				<h1 className="mt-16 text-3xl font-semibold">Concerts</h1>
				<p className="mt-2 opacity-50">View the list of upcoming concerts for StageFright.</p>
				<section className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 mb-7 justify-center items-center gap-y-16">
					{
						concerts.map((concert, index) => {
							return (
								<Concert concert={concert} key={index} />
							)
						})
					}
				</section>
			</section>
		</>
	)
}

export default ConcertsDisplay;
