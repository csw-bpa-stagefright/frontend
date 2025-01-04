'use client'
import React, { useEffect, useState } from 'react'

// component imports
import CartPreview from './CartPreview';
import CheckoutForm from './CheckoutForm';
import { getCookie } from 'cookies-next';
import { permanentRedirect } from 'next/navigation';
// import CheckoutForm from './CheckoutForm';

const CheckoutPageContents = () => {
	const [jwt, setJwt] = useState<string>('');
	const [name, setName] = useState<string>('');


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
			<main className="md:h-[100vh] md:max-h-[100vh] px-7 relative">
				<div className="w-full flex-col md:flex-row mr-auto py-5 ml-auto h-full max-w-[1500px] flex items-center justify-center gap-3">
					<CheckoutForm />
					<CartPreview />
				</div>
			</main>
		</>
	)
}

export default CheckoutPageContents;
