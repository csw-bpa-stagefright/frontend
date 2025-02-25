"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft, ArrowRight } from "react-feather"

const SectionTwo = () => {
	return (
		<>
			<section className="px-7 my-14 h-fit">
				<div className="w-full mr-auto ml-auto h-fit max-w-[1350px]">
					{/* CATEGORIES SECTION */}
					<div className="w-full flex items-center h-fit justify-between">
						<h1 className="text-xl tracking-tight font-semibold">Categories</h1>
					</div>

					<div className="mt-7 w-full flex flex-col h-fit md:flex-row md:items-center md:justify-between gap-3">
						<Link href="merch" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
							<Image
								src="/images/merch1.avif"
								alt="merch"
								layout='fill'
								style={{ objectFit: 'cover', borderRadius: '10px' }}
							/>
							<div className="absolute inset-0 bg-black/50 rounded-sm"></div>
							<p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Apparel</p>
						</Link>
						<Link href="" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
							<Image
								src="/images/img1.avif"
								alt="concerts"
								layout='fill'
								style={{ objectFit: 'cover', borderRadius: '10px' }}
							/>
							<div className="absolute inset-0 bg-black/50 rounded-sm"></div>
							<p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Concerts</p>
						</Link>
						<Link href="menu?category=dessert" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
							<Image
								src="/images/img2.avif"
								alt="tickets"
								layout='fill'
								className="rounded-sm"
								style={{ objectFit: 'cover' }}
							/>
							<div className="absolute inset-0 bg-black/50 rounded-sm"></div>
							<p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Tickets</p>
						</Link>
						<Link href="menu?category=beverage" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
							<Image
								src="/images/img3.avif"
								alt="appetizers"
								layout='fill'
								className="rounded-sm"
								style={{ objectFit: 'cover' }}
							/>
							<div className="absolute inset-0 bg-black/50 rounded-sm"></div>
							<p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Contact</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export default SectionTwo;
