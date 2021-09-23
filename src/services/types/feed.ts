export type TOrderObj = {
	_id: string;
	name: string;
	number: number;
	createdAt: string;
	ingredients: Array<string>;
	status: string | any;
	updatedAt: string;	
	openFeedModal?: () => void;
};

export type TOrdersObj = {
	orders: Array<TOrderObj>;
	total: number;
	totalToday: number;
};

export type TFeedState = {
	orders: Array<TOrderObj>;
	total: number;
	totalToday: number;
	wsConnected: boolean;
	wsError: boolean;
};