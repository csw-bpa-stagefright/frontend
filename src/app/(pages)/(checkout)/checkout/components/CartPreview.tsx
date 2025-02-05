'use client'
import React from 'react'

// Component Imports
import Cart from '@/~/libs/components/global/Navbar/cart/Cart'

const CartPreview = () => {
	return (
		<>
			<section className="w-full md:max-w-[40%] lg:max-w-[30%] relative justify-center bg-white border-[1px] rounded-md border-neutral-200 h-full flex flex-col minimal-scrollbar items-start gap-2 px-7 py-12">
				<Cart deactivateCart={() => {

				}} usedInCheckout />
			</section>
		</>
	)
}

export default CartPreview
