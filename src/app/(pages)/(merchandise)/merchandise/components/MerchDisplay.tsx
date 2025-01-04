'use client'

import { API_URL } from "@/~/libs/global/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Merch from "./Merch";
import { getMerch } from "../getMerch";

export type MerchType = {
	name: string,
	description: string,
	price: number,
	image: string
}

const ConcertsDisplay = () => {
	const [merch, setMerch] = useState<MerchType[]>([]);

	useEffect(() => {
		const m = getMerch();
		setMerch(() => m as MerchType[]);
	}, [])

	return (
		<>
			<section className="max-w-[1100px] ml-auto mr-auto px-3 py-4">
				<h1 className="mt-16 text-3xl font-semibold">Merchandise</h1>
				<p className="mt-2 opacity-50">View the list of fashionable merchandise sold by StageFright.</p>
				<section className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 mb-7 justify-center items-center gap-y-16">
					{
						merch.map((merch, index) => {
							return (
								<Merch merch={merch} key={index} />
							)
						})
					}
				</section>
			</section>
		</>
	)
}

export default ConcertsDisplay;
