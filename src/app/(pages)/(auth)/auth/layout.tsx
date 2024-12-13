import { hasCookie } from "cookies-next/server";
import { cookies } from 'next/headers';

import { permanentRedirect } from "next/navigation";

const AuthLayout = async (
	{
		children,
	}: Readonly<{ children: React.ReactNode }>
) => {
	const jwt = await hasCookie("jwt", { cookies });

	if (jwt) {
		permanentRedirect("/")
	}

	return children;
}

export default AuthLayout;
