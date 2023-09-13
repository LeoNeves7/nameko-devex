import type { PageServerLoad } from './$types'
import type { IOrder } from '../../interfaces/order'

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch('http://localhost:8000/orders/1', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const order: IOrder = await response.json()
		return { ...order }
	} catch (error) {
		const emptyData: IOrder = {
			id: 0,
			order_details: [],
		}
		return { ...emptyData }
	}
}
