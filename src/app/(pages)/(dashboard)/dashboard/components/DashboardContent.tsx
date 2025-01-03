'use client'

import { getCookie } from "cookies-next"
import { permanentRedirect } from "next/navigation";
import React, { useEffect, useState } from "react"
import TicketsView from "./tickets/TicketsView";

const DashboardContents = () => {
	const [jwt, setJwt] = useState<string>('');
	const [name, setName] = useState<string>('');

	const [currentView, setCurrentView] = useState<'tickets' | "merch">('tickets');

	useEffect(() => {
		const getJwt = getCookie('jwt')
		const getName = getCookie('name');
		if (!getJwt) {
			permanentRedirect('/')
		}
		setJwt(() => getJwt as string);
		setName(() => getName as string)
	}, [])


	return (
		<>
			<h1 className="mt-14 text-3xl font-semibold tracking-tight">Hello, {name}</h1>
			<p className="opacity-50 text-md mt-2">View purchased tickets and merchandise here at the dashboard.</p>
			<div className="mt-7 flex items-center justify-start gap-2">
				<button className={`${currentView == 'tickets' && "!bg-black text-white"} px-3 py-1 bg-neutral-100 rounded-md hover:bg-neutral-200`} onClick={() => {
					setCurrentView(() => 'tickets')
				}}>
					View Tickets
				</button>
				<button className={`${currentView == 'merch' && "!bg-black text-white"} px-3 py-1 bg-neutral-100 rounded-md hover:bg-neutral-200`} onClick={() => {
					setCurrentView(() => 'merch')
				}}>
					View Merchandise
				</button>
			</div>
			{
				currentView == "tickets" ? <TicketsView jwt={jwt} /> : ""
			}
		</>
	)
}

export default DashboardContents;
