import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../..";
import { IProductStore, IProduct } from "./@types";

const initialState: IProductStore = {
	list: {},
	ids: [],
};

/**
 * Actions and Reducers
 */
const slice = createSlice({
	name: "product",
	initialState,
	reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;

// Selectors
export function getProducts({ product }: IStore): IProduct[] {
	const products: IProduct[] = [];

	for (let key in product.list) {
		products.push(product.list[key]);
	}

	return {};
}
