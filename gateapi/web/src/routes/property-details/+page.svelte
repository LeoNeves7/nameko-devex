<script lang="ts">
	import { goto } from '$app/navigation'

	import type { IPropertyType } from 'src/interfaces/properties'

	import BaseTextInput from '../../components/BaseTextInput.svelte'
	import BaseButton from '../../components/BaseButton.svelte'
	import BaseIconCard from '../../components/BaseIconCard.svelte'
	import PropertyInfo from '../../components/property/PropertyInfo.svelte'
	import BuildingIcon from '../../components/icons/BuildingIcon.svelte'
	import HouseIcon from '../../components/icons/HouseIcon.svelte'

	import propertyImage from '$lib/assets/property-details-image.svg'

	let propertyName: string = ''
	let propertySelected: IPropertyType = <IPropertyType>{}
	let address: string = ''

	const propertyTypes: IPropertyType[] = [
		{ name: 'Single-Family', icon: HouseIcon, id: 1 },
		{ name: 'Multi-Family', icon: BuildingIcon, id: 2 },
		{ name: 'Townhome', icon: HouseIcon, id: 3 },
		{ name: 'Condo', icon: BuildingIcon, id: 4 },
	]

	const toggleSelectedPropertyType = (propertyId: number): void => {
		if (propertySelected.id === propertyId) {
			propertySelected = <IPropertyType>{}
			return
		}

		propertySelected = propertyTypes.find(
			(property) => property.id === propertyId
		)
	}
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col md:flex-row mb-6">
		<div class="flex flex-1 flex-col">
			<div class="flex flex-col gap-2 mb-10">
				<h1
					class="text-primary text-xxl drop-shadow-primary font-extrabold leading-9"
				>
					Property details
				</h1>
				<h2 class="text-primary font-normal text-m leading-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</h2>
			</div>
			<div class="flex flex-col gap-6">
				<BaseTextInput
					id={'property-name'}
					label={'Property name'}
					bind:value={propertyName}
				/>
				<BaseTextInput id={'address'} label={'Address'} bind:value={address} />
			</div>
		</div>
		<div
			class="flex justify-center mt-6 md:mt-0 md:justify-end items-start flex-1"
		>
			<img src={propertyImage} alt="" />
		</div>
	</div>
	<div class="flex flex-col w-full mb-6" data-testid="property-type-section">
		<h2 class="mb-4 text-primary">Property type</h2>
		<div
			class="grid grid-cols-2 justify-items-center lg:flex gap-4 lg:justify-between"
		>
			{#each propertyTypes as { name, id, icon } (id)}
				<BaseIconCard
					text={name}
					selected={propertySelected.id === id}
					on:click={() => toggleSelectedPropertyType(id)}
				>
					<svelte:component this={icon} />
				</BaseIconCard>
			{/each}
		</div>
	</div>
	<div class="flex flex-col w-full" data-testid="unit-info-section">
		<h2 class="mb-4 text-primary">Unit info</h2>
		<PropertyInfo />
	</div>
	<div class="flex justify-between w-full mt-14">
		<BaseButton
			props={{ text: 'BACK', type: 'primary' }}
			on:click={() => goto('/')}
		/>
		<BaseButton props={{ text: 'CONTINUE', type: 'secondary' }} />
	</div>
</div>
