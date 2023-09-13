<script lang="ts">
	type InputType = 'text' | 'number'

	export let id: string
	export let value: string | number
	export let label: string
	export let placeholder: string = ''
	export let inputType: InputType = 'text'
	export let readOnly: boolean = false

	const inputClasses = (): string => {
		return `input-hover h-12 bg-white border-[1px] border-solid border-secondary 
            transition-colors duration-300 font-normal text-primary p-4 rounded-[4px] placeholder:text-secondary`
	}
</script>

<div class="flex flex-1 flex-col md:max-w-md gap-2">
	<label for={id} class="text-primary text-s leading-4">
		{label}
	</label>
	{#if inputType === 'number'}
		<input type="number" {id} bind:value {placeholder} class={inputClasses()} />
	{:else}
		<input
			type="text"
			{id}
			bind:value
			{placeholder}
			class={inputClasses()}
			disabled={readOnly}
		/>
	{/if}
</div>
