"use client";
import React, { useEffect, useState } from "react";
import cinzel from "@/~/libs/fonts/cinzel";
import Link from "next/link";
import { ChevronDown, ShoppingBag, X } from "react-feather"
import Image from "next/image";
import { useCartStore } from "@/~/libs/providers/cart-store-provider";
import { getCookie, deleteCookie } from "cookies-next/client";
import Cart from "./cart/Cart";

interface DefaultNavbarInterface {
    whitebg?: boolean;
    hideMiddleLinks?: boolean;
}

interface AccountDropdownInterface {
    name: string;
}

const AccountDropdown: React.FC<AccountDropdownInterface> = ({ ...props }) => {
    return (
        <>
            <div className="group relative">
                <button className="flex items-center gap-2 transition-all duration-150 justify-center group-hover:bg-black/5 px-3 py-2 rounded-sm">
                    <p className="opacity-75">{props.name}</p>
                    <ChevronDown size={20} opacity={0.5} className="group-hover:rotate-180 transition-all duration-150" />
                </button>
                <div className="absolute right-0 top-[80%] w-full group-hover:top-[100%] group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none transition-all duration-150">
                    <div className="mt-2 flex flex-col items-start justify-center gap-1">
                        <Link href={"/dashboard"} className="w-full text-center hover:opacity-70 bg-neutral-100 text-black px-3 py-2 rounded-sm">Dashboard</Link>
                        <button onClick={() => {
                            deleteCookie("name");
                            deleteCookie("jwt");
                            window.location.reload();
                        }} className="w-full text-center hover:bg-red-700 bg-red-600 text-white px-3 py-2 rounded-sm">Log Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const DefaultNavbar: React.FC<DefaultNavbarInterface> = ({ ...props }) => {
    const [name, setName] = useState<string | null>();
    const { isActive, deactivateCart, activateCart, toggleCart } = useCartStore((state) => state);

    useEffect(() => {
        setName(() => getCookie("name"));
    }, [])

    return (
        <>
            {
                isActive
                &&
                <>
                    <section className="fixed w-full backdrop-blur-[2px] h-[100vh] z-[100000] bg-black/30">
                        <Cart deactivateCart={deactivateCart} />
                    </section>
                </>
            }
            <nav className={`z-[100] ${props.whitebg ? "bg-white/90" : "bg-mainbg/90"} backdrop-blur-[5px] px-5 py-5 border-b-[1px] border-b-black/10 sticky top-0 left-0 w-full`}>
                <div className="max-w-[1350px] mx-auto flex items-center justify-between w-full">
                    <div>
                        <Link href={"/"} className="group flex items-center justify-center gap-2">
                            <h1 className={`text-[1.65rem] group-hover:opacity-100 opacity-70 font-medium ${cinzel.className} transition-all duration-100`}>Stage Fright</h1>
                        </Link>
                    </div>
                    {
                        !(props.hideMiddleLinks)
                        &&
                        <ul className="hidden lg:flex items-center justify-center gap-0 uppercase bg-[rgba(0,0,0,0.0)] px-0 py-0 rounded-sm">
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"/about"}>
                                <li >About</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"/concerts"}>
                                <li >Concerts</li>
                            </Link>
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"/merchandise"}>
                                <li>Merchandise</li>
                            </Link>
                            {
                                /*
                        <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                            <li>Releases</li>
                        </Link>
                                 */
                            }
                            <Link className="w-full h-full hover:bg-[rgba(0,0,0,0.03)] hover:scale-[105%] px-5 py-3 transition-all duration-200" href={"#"}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    }
                    <div className="flex items-center justify-center gap-5">
                        <button onClick={() => {
                            activateCart();
                        }} className="border-[0px] flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-[105%] px-2 py-2 transition-all duration-200">
                            <ShoppingBag size={22} />
                        </button>
                        {
                            name
                                ?
                                <AccountDropdown name={name} />
                                :
                                <Link href={"/auth/signup"} className="bg-neutral-950 hover:opacity-90 text-white px-7 py-2.5 rounded-sm text-[0.9rem] uppercase">Sign Up</Link>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DefaultNavbar;
