<script lang="ts">
	import type { IOptions } from '../../interfaces/select'

	import BaseCurrencyInput from '../BaseCurrencyInput.svelte'
	import BaseTextInput from '../BaseTextInput.svelte'
	import BaseSelect from '../BaseSelect.svelte'

	import BedIcon from '../icons/BedIcon.svelte'
	import BathIcon from '../icons/BathIcon.svelte'
	import PeopleIcon from '../icons/PeopleIcon.svelte'
	import CalendarIcon from '../icons/CalendarIcon.svelte'

	export let clearValues: boolean = false
	export let unitName: string = ''
	export let selectedDate: string = ''
	export let selectedBed: IOptions = { name: '' }
	export let selectedBath: IOptions = { name: '' }
	export let selectedVacancy: IOptions = { name: '' }
	export let lease: number = 0
	export let sqft: number = 0
	export let rent: number = 0
	export let deposit: number = 0

	const handleClearValues = () => {
		unitName = ''
		selectedDate = ''
		selectedBed = { name: '' }
		selectedBath = { name: '' }
		selectedVacancy = { name: '' }
		lease = 0
		sqft = 0
		rent = 0
		deposit = 0

		clearValues = false
	}

	$: clearValues ? handleClearValues() : null
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
		<BaseSelect
			id="beds"
			label="Beds"
			icon={BedIcon}
			bind:selectedOption={selectedBed}
			options={[
				{ id: 1, name: 'One bed' },
				{ id: 2, name: 'Two beds' },
				{ id: 3, name: 'Three beds' },
			]}
		/>
		<BaseSelect
			id="baths"
			label="Baths"
			icon={BathIcon}
			bind:selectedOption={selectedBath}
			options={[
				{ id: 1, name: 'One bath' },
				{ id: 2, name: 'Two baths' },
			]}
		/>
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
		<BaseSelect
			id="vacancy"
			label="Vacancy"
			icon={PeopleIcon}
			bind:selectedOption={selectedVacancy}
			options={[
				{ id: 1, name: '1 - 3 ' },
				{ id: 2, name: '4 - 5' },
			]}
		/>
	</div>
</div>
