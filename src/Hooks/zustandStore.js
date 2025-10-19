import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const zustandStore = create(
	persist(
		set => ({
			cart: [], // ["id1", "id2"]
			favorite: [],

			// faqat id saqlanadi
			addToCart: productId =>
				set(state => {
					const id = productId.toString();
					if (!state.cart.includes(id)) {
						return { cart: [...state.cart, id] };
					}
					return {};
				}),
			removeFromCart: productId =>
				set(state => ({
					cart: state.cart.filter(id => id !== productId.toString()),
				})),

			addToFavorite: productId =>
				set(state => {
					const id = productId.toString();
					if (!state.favorite.includes(id)) {
						return { favorite: [...state.favorite, id] };
					}
					return {};
				}),
			removeFromFavorite: productId =>
				set(state => ({
					favorite: state.favorite.filter(id => id !== productId.toString()),
				})),
			compareList: [],

			addToCompare: product =>
				set(state => {
					const alreadyAdded = state.compareList.find(
						p => p._id === product._id
					);
					if (alreadyAdded) return state;
					return { compareList: [...state.compareList, product] };
				}),

			removeFromCompare: id =>
				set(state => ({
					compareList: state.compareList.filter(item => item._id !== id),
				})),

			clearCompare: () => set({ compareList: [] }),
			// mahsulot va kategoriyalarni saqlash
			products: [],
			setProducts: arr => set({ products: arr }),

			categories: [],
			setCategories: arr => set({ categories: arr }),
			token: null,
			setToken: data => set({ token: data }),
		}),
		{
			name: 'UPGREDED',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
