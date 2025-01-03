import { createStore } from 'zustand/vanilla'

export type CartState = {
	isActive: boolean
}

export type CartActions = {
	deactivateCart: () => void
	activateCart: () => void
	toggleCart: () => void
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
	isActive: false,
}

export const createCartStore = (
	initState: CartState = defaultInitState,
) => {
	return createStore<CartStore>()((set) => ({
		...initState,
		activateCart: () => set((state) => ({ isActive: true })),
		deactivateCart: () => set((state) => ({ isActive: false })),
		toggleCart: () => set((state) => ({ isActive: !state.isActive })),
	}))
}
