'use client'

import React from "react"

interface TicketModalInterface {
	ticketId: string
}

const TicketModal: React.FC<TicketModalInterface> = ({ ...props }) => {
	return (
		<>
			<div className="w-full h-[100vh] fixed left-0 top-0 z-[100000] bg-black/80 backdrop-blur-[5px] flex items-center justify-center">

				<p>{props.ticketId}</p>
			</div>
		</>
	)
}

export default TicketModal;
