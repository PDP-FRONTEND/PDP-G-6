export interface IProductStore {
	list: { [key: string]: IProduct };
	ids: (string | number)[];
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
