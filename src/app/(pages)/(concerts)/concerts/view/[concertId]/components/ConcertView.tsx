'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import L from "leaflet";
import { Calendar, DollarSign, MapPin } from "react-feather";

type ConcertType = {
	date: string,
	description: string,
	id: string,
	imageUrl?: string,
	location: string,
	name: string,
	ticketCost: number,
}

interface ConcertViewInterface {
	concert: ConcertType;
}

function getDateString(dt: string) {
	const date = new Date(dt);
	const month = date.toLocaleString('default', { month: 'long' });
	const day = date.getDate();
	return [month, ' ', day];
}

const ConcertView: React.FC<ConcertViewInterface> = ({ ...props }) => {
	const [bbox, setBbox] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const response = await fetch(
					`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(props.concert.location)}&format=json`
				);
				const data = await response.json();

				if (data.length === 0) {
					setError("Location not found.");
					return;
				}

				// Extract bounding box
				const boundingBox = data[0].boundingbox;
				setBbox(`${boundingBox[2]},${boundingBox[0]},${boundingBox[3]},${boundingBox[1]}`);
				console.log("success")
				console.log(data)
			} catch (err) {
				console.error(err)
				setError("Error fetching location data.");
			}
		};

		fetchLocation();
	}, [location]);

	return (
		<>
			<section className="mt-10 mb-10">
				<div className="mt-5 flex items-center flex-col justify-between gap-3">
					<div className="w-full flex flex-col items-center h-full border-[1px] border-neutral-300 rounded-md px-5 py-7">
						<h1 className="text-4xl tracking-tight font-semibold">{props.concert.name}</h1>
						<p className="text-lg opacity-50 mt-2">{props.concert.description}</p>
						<div className="flex flex-col items-center gap-2 my-3">
							<p className="flex items-center justify-center gap-2 text-lg opacity-50 font-medium"><MapPin size={21} />{props.concert.location}</p>
							<p className="flex items-center justify-center gap-2 text-lg opacity-50 font-medium"><DollarSign size={21} />{props.concert.ticketCost} per Ticket</p>
							<p className="flex items-center justify-center gap-2 text-lg opacity-50 font-medium"><Calendar size={21} />{...getDateString(props.concert.date)}</p>
						</div>
					</div>
					<div className="flex w-full justify-center items-center gap-3">
						<div className="w-full h-[300px] relative rounded-md border-[1px] border-neutral-300">
							<Image
								src={props.concert.imageUrl ?? "/images/no-img-placeholder.svg"}
								alt="concert"
								layout="fill"
								objectFit="cover"
								className="rounded-md"
							/>
						</div>
						<div className="w-full">
							<iframe
								// width="600"
								height="300"
								src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`}
								className="rounded-md border-[1px] border-neutral-400 w-full"
								allowFullScreen
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ConcertView;
