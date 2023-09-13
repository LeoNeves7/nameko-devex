<script lang="ts">
	import BaseCurrencyInput from '../BaseCurrencyInput.svelte'
	import BaseTextInput from '../BaseTextInput.svelte'
	import BaseSelect from '../BaseSelect.svelte'

	import BedIcon from '../icons/BedIcon.svelte'
	import BathIcon from '../icons/BathIcon.svelte'
	import PeopleIcon from '../icons/PeopleIcon.svelte'
	import CalendarIcon from '../icons/CalendarIcon.svelte'

	let unitName: string = ''
	let selectedDate: string = ''
	let lease: number = 0
	let sqft: number = 0
	let rent: number = 0
	let deposit: number = 0
</script>

<div
	class="flex flex-col sm:grid lg:grid-rows-2 gap-6 bg-white border-solid border-[1px] p-4 border-white-secondary rounded shadow-primary-shadow"
>
	<div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
		<BaseTextInput
			id="unit-name"
			label="Unit Name"
			placeholder="Name and/or number"
			bind:value={unitName}
		/>
		<BaseCurrencyInput id="rent" label="Rent" bind:value={rent} />
		<BaseCurrencyInput id="deposit" label="Deposit" bind:value={deposit} />
		<BaseTextInput
			id="lease"
			inputType="number"
			label="Lease Length (months)"
			bind:value={lease}
		/>
	</div>
	<div class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
		<BaseSelect id="beds" label="Beds" icon={BedIcon} options={[]} />
		<BaseSelect id="baths" label="Baths" icon={BathIcon} options={[]} />
		<BaseTextInput
			id="sq"
			inputType="number"
			label="Sq. Ft"
			bind:value={sqft}
		/>
		<BaseTextInput
			id="available"
			label="Available on"
			placeholder="mm/dd/yyyy"
			icon={CalendarIcon}
			bind:value={selectedDate}
		/>
		<BaseSelect id="vacancy" label="Vacancy" icon={PeopleIcon} options={[]} />
	</div>
</div>
