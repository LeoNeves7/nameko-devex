<script lang="ts">
	import type { IOptions } from 'src/interfaces/select'
	import { slide } from 'svelte/transition'

	import ArrowIcon from './icons/ArrowIcon.svelte'
	import CloseIcon from './icons/CloseIcon.svelte'

	export let id: string
	export let options: IOptions[]
	export let label: string
	export let icon: ConstructorOfATypedSvelteComponent = null
	export let selectedOption: IOptions = {
		name: '',
	}

	let showDropdown: boolean = false

	const toggleShowDropdown = (): void => {
		showDropdown = !showDropdown
	}

	const handleClearValue = (): void => {
		selectedOption = {
			name: '',
		}
	}

	const inputClasses = (): string => {
		return `input-hover h-12 bg-white border-[1px] pr-10 text-center transition-colors duration-300 border-solid border-secondary 
            text-primary p-4 rounded placeholder:text-grey`
	}
</script>

<div
	class="flex flex-1 relative flex-col md:max-w-md gap-2"
	data-testid="base-select"
	on:click={toggleShowDropdown}
	on:keydown={toggleShowDropdown}
>
	<label for={id} class="text-primary text-s leading-4">
		{label}
	</label>

	{#if icon && !selectedOption.name}
		<div class="absolute top-[34px] left-3">
			<svelte:component this={icon} />
		</div>
	{/if}
	<input
		{id}
		value={selectedOption.name}
		placeholder="Select"
		readonly
		class={inputClasses()}
	/>
	{#if selectedOption.name}
		<button
			class="flex items-center justify-center absolute top-11 right-4 w-6 text-accent transition-transform duration-300"
			on:click={handleClearValue}
		>
			<CloseIcon />
		</button>
	{:else}
		<div
			class="absolute top-11 right-4 text-accent transition-transform duration-300"
			class:rotate-180={showDropdown}
		>
			<ArrowIcon />
		</div>
	{/if}

	{#if showDropdown}
		<div
			transition:slide
			data-testid="base-select-dropdown"
			class="absolute z-30 top-full flex flex-col gap-3 border-[1px] border-solid border-secondary rounded w-full mt-2 p-4 bg-white max-h-48"
		>
			{#each options as option (option.id)}
				<button
					class="transition-colors duration-300 hover:text-accent focus:text-accent"
					on:click={() => {
						selectedOption = option
					}}
				>
					{option.name}
				</button>
			{:else}
				<p class="text-xxs">There are any options.</p>
			{/each}
		</div>
	{/if}
</div>
