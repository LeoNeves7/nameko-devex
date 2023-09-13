<script lang="ts">
	import { slide } from 'svelte/transition'

	import ArrowIcon from './icons/ArrowIcon.svelte'

	interface IOptions {
		id: number
		name: string
	}

	export let id: string
	export let options: IOptions[]
	export let label: string
	export let icon: ConstructorOfATypedSvelteComponent = null

	let showDropdown: boolean = false
	let value: any = ''

	const toggleShowDropdown = (): void => {
		showDropdown = !showDropdown
	}

	const inputClasses = (): string => {
		return `input-hover h-12 bg-white border-[1px] text-center transition-colors duration-300 border-solid border-secondary 
            font-normal text-primary p-4 rounded placeholder:text-grey`
	}
</script>

<div
	class="flex flex-1 relative flex-col md:max-w-md gap-2"
	on:click={toggleShowDropdown}
	on:keydown={toggleShowDropdown}
>
	<label for={id} class="text-primary text-s leading-4">
		{label}
	</label>

	{#if icon && !value}
		<div class="absolute top-[34px] left-4">
			<svelte:component this={icon} />
		</div>
	{/if}
	<input {id} {value} placeholder="Select" class={inputClasses()} />
	<div
		class="absolute top-11 right-4 text-accent transition-transform duration-300"
		class:rotate-180={showDropdown}
	>
		<ArrowIcon />
	</div>
	{#if showDropdown}
		<div
			transition:slide
			class="absolute z-30 top-full border-[1px] border-solid border-secondary rounded w-full mt-2 p-4 bg-white max-h-48"
		>
			{#each options as option (option.id)}
				<button
					on:click={() => {
						value = option
					}}
				>
					{option.name}
				</button>
			{:else}
				<p class="font-normal text-xxs">There are any options.</p>
			{/each}
		</div>
	{/if}
</div>
