<script lang="ts">
	import CurrencyIcon from './icons/CurrencyIcon.svelte'
	import BaseErrorMessage from './BaseErrorMessage.svelte'
	import { validateValue } from '../utils/validation'

	export let id: string
	export let value: number
	export let label: string

	let inputRef: HTMLInputElement
	let inputIsValid: boolean = true
	let errorMessage: string = ''

	const handleInputError = (value) => {
		const error = validateValue(value)
		inputIsValid = error.valid
		errorMessage = error.message
	}
</script>

<div
	class="flex md:flex-1 flex-col md:max-w-md gap-2"
	data-testid="base-currency"
	on:click={() => inputRef.focus()}
	on:keyup={() => inputRef.focus()}
>
	<label for={id} class="text-primary text-s leading-4">
		{label}
	</label>
	<div
		class:border-red={!inputIsValid}
		class="input-hover transition-colors justify-between lg:justify-normal duration-300 flex md:max-w-md gap-2 items-center text-grey text-s leading-4 h-12 bg-white border-[1px] border-solid border-secondary p-4 rounded-[4px]"
	>
		<CurrencyIcon />
		<input
			type="number"
			{id}
			bind:value
			bind:this={inputRef}
			on:blur={() => handleInputError(value)}
			class="text-end max-w-[80px]"
		/>
		<p>/mo</p>
	</div>
	{#if !inputIsValid}
		<BaseErrorMessage text={errorMessage} />
	{/if}
</div>
