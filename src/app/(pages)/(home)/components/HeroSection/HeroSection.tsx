"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import AnimateOnScroll from '@/~/libs/components/global/AOS/AnimateOnScroll';
import { deleteCookie } from "cookies-next";
import Link from "next/link";

const HeroSection = () => {
    const [isVideoEnded, setIsVideoEnded] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const sectionRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.3;
        }
    }, []);

    return (
        <>
            <section ref={sectionRef} className="mt-7 px-5 w-screen relative">
                <div className="w-screen relative max-w-[1350px] mx-auto">

                    <AnimateOnScroll
                        refElement={sectionRef}
                        duration={0.2}
                        once
                        originalScale={0.97}
                    >

                        <div className="text-white relative z-[50] px-12 py-7">
                            <h1 className="md:text-[2.8rem] text-4xl font-semibold mt-5">StageFright Super Rock Tour Upcoming!</h1>
                            <p className="lg:max-w-[50%]  mb-5 opacity-80 lg:opacity-70 mt-5 text-lg">Tickets are now on sale! The tour will have multiple concerts and will span 3 months, visiting popular areas in the USA! Merchandise is also on sale!</p>
                            <Link href={"/concerts"} className="bg-white hover:opacity-90 text-black mt-5 px-7 py-2.5 rounded-sm text-[0.9rem] uppercase font-semibold">Buy Tickets</Link>

                            <div className="mt-24">
                                <p className="uppercase text-lg opacity-90">Shop Tickets</p>
                                <div className="mt-5 flex items-center justify-start gap-5">
                                    <Link href="/concerts" className="w-[150px] hover:opacity-80 h-[200px] bg-white/10 cursor-pointer">
                                        <div className="relative w-full h-[150px]">
                                            <Image
                                                src="/images/img1.avif"
                                                alt="test"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <p className="text-center mt-3">Upcoming Concert</p>
                                    </Link>
                                    <Link href="/concerts" className="w-[150px] hover:opacity-80 h-[200px] bg-white/10 cursor-pointer">
                                        <div className="relative w-full h-[150px]">
                                            <Image
                                                src="/images/img2.avif"
                                                alt="test"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <p className="text-center mt-3">Upcoming Concert</p>
                                    </Link>
                                    <Link href="/concerts" className="w-[150px] hover:opacity-80 h-[200px] bg-white/10 cursor-pointer">
                                        <div className="relative w-full h-[150px]">
                                            <Image
                                                src="/images/img3.avif"
                                                alt="test"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <p className="text-center mt-3">Upcoming Concert</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-0 top-0 w-full h-full min-h-[600px]">
                            {/* <div className="absolute left-0 top-0 w-full h-full bg-black/60 z-[10] xl:pr-[0px] pr-[40px]"></div> */}
                            <Image className={`${isVideoEnded && "opacity-100"} brightness-[40%] opacity-0 z-[0]  xl:pr-[0px] pr-[40px] `} src="/images/hero-img.jpg" alt="hi" layout="fill" objectFit="cover">
                            </Image>
                            {
                                !(isVideoEnded)
                                &&
                                <video ref={videoRef} src="/hero-video.mp4" onEnded={() => setIsVideoEnded(() => true)} muted autoPlay className="w-full max-h-[600px] brightness-[40%] min-h-[600px] xl:pr-[0px] pr-[40px] object-cover z-[1]"></video>
                            }
                        </div>

                    </AnimateOnScroll>

                </div>
            </section>
        </>
    )
}

export default HeroSection;
