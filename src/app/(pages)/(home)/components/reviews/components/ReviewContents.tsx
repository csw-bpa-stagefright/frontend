import React from 'react'
import Link from 'next/link';

// Component Imports 
import ReviewCard from "./ReviewCard";
import { ChevronRight, ArrowRight } from 'react-feather';

const ReviewContents = () => {
	return (
		<>
			<div className="w-full flex items-center h-fit justify-between">
				<div>
					<h1 className="text-2xl font-semibold tracking-tight text-neutral-800 mb-2">Don't take our word for it.</h1>
					<p className="text-[0.92rem] font-medium text-neutral-500">Check out what concert-goers have to say!</p>
				</div>
			</div>

			<div className="flex flex-wrap">
				<div className="w-full gap-5 flex-col md:flex-row flex items-center justify-between py-3 mt-8">
					<ReviewCard
						reviewContent='“An unforgettable night! The energy was insane, and every song hit perfectly.”'
						authorName='Josh Beacone'
						authorPfp='/images/forky-pfp.jpg'
					/>
					<ReviewCard
						reviewContent='“The lights, the music, the crowd—everything was pure magic. Best concert ever!”'
						authorName='Jacob Black'
						authorPfp='/images/starry-pfp.jpg'
					/>
					<ReviewCard
						reviewContent='“The atmosphere was electric! The band sounded even better live than on the album.”'
						authorName='Kaitlynn Anthony'
						authorPfp='/images/sunset-pfp.jpg'
					/>
				</div>
				<div className="w-full gap-5 flex-col md:flex-row flex items-center justify-between py-3 mt-4">
					<ReviewCard
						reviewContent='“Incredible performance! The setlist was perfect, and the encore was legendary.”'
						authorName='Greg Murphy'
						authorPfp='/images/forky-pfp.jpg'
					/>
					<ReviewCard
						reviewContent='“The crowd was alive, and the sound quality was amazing. Can’t wait for the next tour!”'
						authorName='Chelsea Lu'
						authorPfp='/images/starry-pfp.jpg'
					/>
					<ReviewCard
						reviewContent='“From start to finish, it was an emotional rollercoaster. Hands down the best concert I’ve attended.”'
						authorName='Mac Jones'
						authorPfp='/images/sunset-pfp.jpg'
					/>
				</div>
			</div>
		</>
	)
}

export default ReviewContents;
