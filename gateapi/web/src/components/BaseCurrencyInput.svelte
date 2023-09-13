<script lang="ts">
	import CurrencyIcon from './icons/CurrencyIcon.svelte'

	export let id: string
	export let value: number
	export let label: string

	let inputRef: HTMLInputElement
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
		class="input-hover transition-colors justify-between lg:justify-normal duration-300 flex md:max-w-md gap-2 items-center text-grey text-s leading-4 h-12 bg-white border-[1px] border-solid border-secondary p-4 rounded-[4px]"
	>
		<CurrencyIcon />
		<input
			type="number"
			{id}
			bind:value
			bind:this={inputRef}
			class="font-normal text-end max-w-[80px]"
		/>
		<p class="font-normal">/mo</p>
	</div>
</div>
