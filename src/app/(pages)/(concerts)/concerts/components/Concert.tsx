'use client'
import React, { useEffect, useState } from "react"
import { type ConcertType } from "./ConcertsDisplay"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "react-feather"
import { useRouter } from "next/navigation"

interface ConcertInterface {
	concert: ConcertType
}

const Concert: React.FC<ConcertInterface> = ({ ...props }) => {
	const [date, setDate] = useState<{ month: string, day: number }>();

	const router = useRouter();

	useEffect(() => {
		const date = new Date(props.concert.date);
		const month = date.toLocaleString('default', { month: 'long' });
		const day = date.getDate();
		setDate({
			month: month,
			day: day
		})
		// console.log(`Month: ${month}, Day: ${day}`);
	}, [])
	return (
		<>
			<div className="w-full h-full border-[1px] border-neutral-300 px-4 py-3 rounded-md">
				<div className="relative w-full h-[200px] border-[1px] border-neutral-300 rounded-md">
					<Image
						src={props.concert.imageUrl ?? "/images/no-img-placeholder.svg"}
						alt="concert image"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
					<div className="absolute left-0 top-0 z-[1] flex items-center justify-center gap-1 bg-neutral-950/50 text-white/90 px-1.5 py-1 text-sm"><p>{date?.month}</p><p>{date?.day}</p></div>
				</div>
				<h1 className="mt-3 text-xl font-semibold tracking-tight">{props.concert.name}</h1>
				<p className="opacity-50">{props.concert.description}</p>
				<p className="mt-1 opacity-75 font-medium">Prices starting at <span className="text-red-700 font-bold">${props.concert.ticketCost}</span></p>
				<button onClick={() => {
					router.push(`/concerts/view/${props.concert.id}`)
				}} disabled={(new Date() > new Date(props.concert.date))} className="flex disabled:cursor-not-allowed items-center justify-center gap-3 mt-3 w-full px-3 py-2.5 rounded-full disabled:opacity-50 bg-neutral-900 text-white font-medium hover:opacity-75">Purchase Tickets <ShoppingCart size={19} /></button>
			</div>
		</>
	)
}

export default Concert;
