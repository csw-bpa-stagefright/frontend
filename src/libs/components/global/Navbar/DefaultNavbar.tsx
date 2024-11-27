"use client";
import React from "react";
import cinzel from "@/~/libs/fonts/cinzel";
import Link from "next/link";
import { ShoppingBag } from "react-feather"
import Image from "next/image";

interface DefaultNavbarInterface {
    whitebg?: boolean;
    hideMiddleLinks?: boolean;
}

const DefaultNavbar: React.FC<DefaultNavbarInterface> = ({ ...props }) => {
    return (
        <>
            <nav className={`z-[100] ${props.whitebg ? "bg-white/90" : "bg-mainbg/90"} backdrop-blur-[5px] px-5 py-5 border-b-[1px] border-b-black/10 sticky top-0 left-0 w-full`}>
                <div className="max-w-[1350px] mx-auto flex items-center justify-between w-full">
                    <div>
                        <Link href={"/"} className="group flex items-center justify-center gap-2">
                            <Image
                                src="/images/discy-wiscy.svg"
                                alt="bob"
                                width={30}
                                height={30}
                            />
                            <h1 className={`text-[1.65rem] group-hover:opacity-100 opacity-70 font-medium ${cinzel.className} transition-all duration-100`}>Stage Fright</h1>
                        </Link>
                    </div>
                    {
                        !(props.hideMiddleLinks)
                        &&
                        <ul className="hidden lg:flex items-center justify-center gap-0 uppercase bg-[rgba(0,0,0,0.0)] px-0 py-0 rounded-sm">
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li >About</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li >Concerts</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li>Merchandise</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li>Releases</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    }
                    <div className="flex items-center justify-center gap-5">
                        <button className="border-[0px] flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-[105%] px-2 py-2 transition-all duration-200">
                            <ShoppingBag size={22} />
                        </button>
                        <Link href={"/auth/signup"} className="bg-neutral-950 hover:opacity-90 text-white px-7 py-2.5 rounded-sm text-[0.9rem] uppercase">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DefaultNavbar;
