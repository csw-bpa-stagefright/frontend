'use client'

import { API_URL } from "@/~/libs/global/api"
import React, { useEffect, useState } from "react"

import axios from 'axios';
import { getCookie } from "cookies-next";
import toast from "react-hot-toast";
import { X } from "react-feather";

import QRCode from "react-qr-code";

interface TicketsViewInterface {
	jwt: string
}

const TicketsView: React.FC<TicketsViewInterface> = ({ ...props }) => {
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currTicketid, setCurrTicketId] = useState<string>('');
	const [currIsScanned, setCurrIsScanned] = useState<boolean>(false);

	const [resData, setData] = useState<{
		ticket: {
			id: string,
			concertId: string,
			userId: string
			isScanned: boolean;
		},
		concert: {
			date: string,
			description: string,
			id: string,
			imageUrl: string,
			location: string,
			name: string,
			ticketCost: string
		}
	}[]>([]);

	useEffect(() => {
		console.log("RES: ", resData)
	}, [resData])


	useEffect(() => {
		const fetchTickets = async () => {
			try {
				const jwt = getCookie("jwt");
				const response: any = await axios.get(`${API_URL}/api/ticket/getMany`, {
					headers: {
						authorization: jwt
					}
				});

				if (response.data.data !== "success") {
					toast.error("An error occurred");
					setIsError(true);
					return;
				}

				const tickets = response.data.tickets;
				const results = await Promise.all(
					tickets.map(async (ticket: any) => {
						try {
							const concertResponse: any = await axios.post(`${API_URL}/api/concert/getone`, {
								id: ticket.concertId
							});
							if (concertResponse.data.concert) {
								return {
									ticket,
									concert: concertResponse.data.concert
								};
							}
						} catch (error) {
							console.error(error);
						}
						return null;
					})
				);

				setData(results.filter(Boolean) as any);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				setIsError(true);
				setIsLoading(false);
			}
		};

		fetchTickets();
	}, []);
	return (
		<>
			{
				isLoading && <p className="mt-5 opacity-50">Loading...</p>
			}
			{
				isError && <p className="mt-5 opacity-50">An error occured.</p>
			}

			{
				isModalOpen
				&&
				<div className="w-full h-[100vh] fixed left-0 top-0 z-[100000] bg-black/80 backdrop-blur-[5px] flex items-center justify-center">
					<div className="w-fit h-fit bg-white pr-[50px]  rounded-md px-5 py-3 relative">
						<X className="absolute right-[10px] top-[10px] cursor-pointer" onClick={() => {
							setIsModalOpen(() => false)
						}} />
						<p className="mb-4">{currIsScanned ? "Scanned" : "Not scanned in yet"}</p>
						<QRCode value={currTicketid} />
					</div>
				</div>
			}

			<section className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 mb-7 justify-center items-center gap-y-16">
				{resData.length == 0 && <p>No tickets found</p>}
				{resData.map((ticket, index) => {
					return (
						<div onClick={() => {
							console.log(ticket)
							setCurrTicketId(() => ticket.ticket.id);
							setCurrIsScanned(() => ticket.ticket.isScanned);
							setIsModalOpen(() => true);
						}} key={index} className="border-[1px] border-neutral-300 px-4 py-3 rounded-md cursor-pointer hover:bg-neutral-100">
							<p className="text-lg font-medium tracking-tight">{ticket.concert.name}</p>
							<p className="text-sm opacity-50 mt-1">ID: {ticket.ticket.id}</p>
							<p className="opacity-50 mt-2">Click to open ticket barcode</p>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default TicketsView;
