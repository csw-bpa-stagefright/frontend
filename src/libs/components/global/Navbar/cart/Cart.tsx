'use client'

import React, { useEffect } from "react"
import { Link as IconLink, X } from "react-feather";

import Link from "next/link";

import { useLiveQuery } from 'dexie-react-hooks';
import dexie from "@/~/libs/dexie";

// import CartItem from './CartItem';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import CartItem from "./CartItem";

export interface CartInterface {
    deactivateCart: () => void;
    usedInCheckout?: boolean;
}

const Cart: React.FC<CartInterface> = ({ ...props }) => {
    const cartItems = useLiveQuery(
        () => dexie.cartItems.toArray()
    );
    const router = useRouter();
    useEffect(() => {
        if (cartItems?.length === 0) {
            if (props.usedInCheckout) {
                console.log("invalid.");
                router.push("/concerts");
            }
        }
    }, [cartItems])
    async function deleteAllItems() {
        try {
            await dexie.cartItems.clear();
        } catch (error) {
            console.log(`Error clearing dexie table. Info: ${error}`)
        }
    }
    console.log(cartItems)
    return (
        <>
            <div className={`w-full h-full bg-white max-w-[420px] ml-auto right-0 top-0 px-7 py-5 flex-col flex items-start`}>
                {
                    !props.usedInCheckout
                    &&
                    <div className="mb-5">
                        <button onClick={() => {
                            props.deactivateCart();
                        }} className="h-[40px] w-[40px] flex items-center justify-center rounded-full border-[1px] border-neutral-300"><X size={21} opacity={0.5} /></button>
                    </div>
                }
                <div className={`w-full flex flex-col gap-9 ${!props.usedInCheckout && "_max-h-[00px]"} overflow-y-auto minimal-scrollbar`}>
                    {!cartItems || cartItems.length == 0 && <p className="opacity-60">You have no items in your cart.</p>}
                    {(cartItems?.length ?? 0) > 0 && <p className="text-lg font-semibold tracking-tight mb-[-10px] opacity-60">{cartItems?.length} items added to cart</p>}
                    {cartItems?.map(item =>
                        <CartItem
                            item={item}
                            key={item.id}
                        />
                    )}
                </div>
                <div className="w-full h-[1px] bg-neutral-200 mt-5" />

                <p className="my-3 text-center text-sm font-medium opacity-60 w-full">Subtotal: ${(cartItems?.reduce((total, item) => total + parseFloat(item.itemPrice), 0))?.toFixed(2)}</p>
                <button onClick={deleteAllItems} className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 mb-2 bg-neutral-200 rounded-md">
                    <p className="text-neutral-600 text-sm font-semibold">Clear Cart</p>
                </button>

                {props.usedInCheckout ? (
                    <Link href="/concerts" className="flex items-center justify-center gap-4 hover:opacity-80 w-full py-3 px-5 bg-black rounded-md ">
                        <p className="text-white font-semibold text-sm">Continue Shopping</p>
                    </Link>
                ) : (
                    cartItems && cartItems.length > 0 ? (
                        <Link href="/checkout" className="flex items-center justify-center gap-4 hover:opacity-80 w-full py-3 px-5 bg-black rounded-md ">
                            <p className="text-white font-semibold text-sm">Checkout</p>
                        </Link>
                    ) : (
                        <button disabled className="flex items-center justify-center gap-4 opacity-50 cursor-auto w-full py-3 px-5 bg-black rounded-md ">
                            <p className="text-white font-semibold text-sm">Checkout</p>
                        </button>
                    )
                )}
            </div>
        </>
    )
}

export default Cart;
