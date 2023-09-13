<script lang="ts">
	import { goto } from '$app/navigation'
	import BaseTextInput from '../../components/BaseTextInput.svelte'
	import BaseButton from '../../components/BaseButton.svelte'

	import type { IOrder } from '../../interfaces/order'

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(price)
	}

	export let data: IOrder
</script>

<div class="flex flex-col">
	<h1
		class="text-primary text-xxl drop-shadow-primary font-extrabold leading-9 mb-6"
		data-testid="order-details-title"
	>
		Order
	</h1>
	{#each data.order_details as { quantity, price, image, product } (data.id)}
		<div class="flex flex-col gap-4" data-testid="orders-wrapper">
			<div
				class="flex items-center border-b border-t border-white-secondary py-2 justify-between"
			>
				<div class="flex flex-col gap-2">
					<p class="text-primary">Quantity: {quantity}</p>
					<p class="text-primary">Price: {formatPrice(price)}</p>
				</div>
				<img
					class="rounded-full border-solid border-[1px] border-white-secondary bg-white h-16 w-16"
					src={image || ''}
					alt=""
				/>
			</div>
			<h2 class="text-primary text-s">Ship details</h2>
			<div
				class="flex flex-col md:grid grid-cols-3 gap-6 bg-white border-solid border-[1px] p-4 border-white-secondary rounded shadow-primary-shadow"
			>
				<BaseTextInput id="ship-id" label="Id" readOnly value={product.id} />
				<BaseTextInput id="title" label="Name" readOnly value={product.title} />
				<BaseTextInput
					id="maximum-speed"
					label="Maximum Speed"
					readOnly
					value={product.maximum_speed}
				/>
				<BaseTextInput
					id="stock"
					label="Stock Available"
					readOnly
					value={product.in_stock}
				/>
				<BaseTextInput
					id="capacity"
					label="Passenger Capacity"
					readOnly
					value={product.passenger_capacity}
				/>
			</div>
		</div>
	{:else}
		<p>There is no data.</p>
	{/each}
	<div class="mt-14">
		<BaseButton text="BACK" type="primary" on:click={() => goto('/')} />
	</div>
</div>
