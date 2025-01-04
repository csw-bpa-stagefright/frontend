'use client'
import React, { useEffect, useState } from "react"
import { MerchType } from "./MerchDisplay"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "react-feather"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/~/libs/providers/cart-store-provider"

import dexie from "@/~/libs/dexie"

interface ConcertInterface {
	merch: MerchType
}

const Merch: React.FC<ConcertInterface> = ({ ...props }) => {
	const router = useRouter();

	const { activateCart } = useCartStore((state) => state);

	async function addToCart() {
		try {
			const itemData = props.merch;
			const menuItems = await dexie.cartItems.add({
				itemId: '1',
				itemName: itemData.name,
				itemDesc: itemData.description,
				itemPrice: JSON.stringify(itemData.price),
				imageUrl: itemData.image as string,
				originalItemPrice: JSON.stringify(itemData.price),
				itemQuantity: 1,
				itemType: 'merch'
			})
			console.log("Successfully added item to cart")
		} catch (error) {
			console.log(`An error occured. ${error}`)
			alert("Could not add item to cart :(")
		}
		// dispatch(toggle())
		activateCart();

	}


	return (
		<>
			<div className="w-full h-full border-[1px] border-neutral-300 px-4 py-3 rounded-md">
				<div className="relative w-full h-[200px] border-[1px] border-neutral-300 rounded-md">
					<Image
						src={props.merch.image ?? "/images/no-img-placeholder.svg"}
						alt="concert image"
						layout="fill"
						objectFit="contain"
						className="rounded-md"
					/>
				</div>
				<h1 className="mt-3 text-xl font-semibold tracking-tight">{props.merch.name}</h1>
				<p className="opacity-50">{props.merch.description}</p>
				<p className="mt-1 opacity-75 font-medium">Prices starting at <span className="text-red-700 font-bold">${props.merch.price}</span></p>
				<button onClick={() => {
					addToCart();
				}} className="flex disabled:cursor-not-allowed items-center justify-center gap-3 mt-3 w-full px-3 py-2.5 rounded-full disabled:opacity-50 bg-neutral-900 text-white font-medium hover:opacity-75">Purchase Merch <ShoppingCart size={19} /></button>
			</div>
		</>
	)
}

export default Merch;
