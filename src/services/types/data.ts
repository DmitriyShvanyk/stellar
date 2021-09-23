export type TItem = {
	__v: number;
	_id: string;
	name: string;
	price: number;
	image: string;
	image_large: string;
	image_mobile: string;
	calories: number;
	carbohydrates: number;
	fat: number;
	proteins: number;
	type: string;
	constructorItemId?: string;
	count?: number | any;	
};

export type TDataState = {
	bun: null | any;
	data: [] | any;
	items: Array<TItem>;
	isLoading: boolean;
	hasError: boolean;
};