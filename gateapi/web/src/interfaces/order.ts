interface IProduct {
	maximum_speed: number
	in_stock: number
	title: string
	id: string
	passenger_capacity: string
}

interface IOrderDetails {
	quantity: number
	price: number
	id: number
	image: string
	product: IProduct
}

export interface IOrder {
	id: number
	order_details: IOrderDetails[]
}
