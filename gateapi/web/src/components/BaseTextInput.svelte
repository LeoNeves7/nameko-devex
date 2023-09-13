<script lang="ts">
	type InputType = 'text' | 'number'

	export let id: string
	export let value: string | number
	export let label: string
	export let placeholder: string = ''
	export let inputType: InputType = 'text'
	export let readOnly: boolean = false
	export let icon: ConstructorOfATypedSvelteComponent = null

	$: icon ? (inputType = 'text') : (inputType = inputType)

	const inputClasses = (): string => {
		return `input-hover h-12 bg-white border-[1px] border-solid border-secondary 
            transition-colors duration-300 font-normal text-primary p-4 rounded-[4px] placeholder:text-secondary`
	}
</script>

<div
	class="flex flex-1 flex-col relative md:max-w-md gap-2"
	data-testid="base-text-input"
>
	<label for={id} class="text-primary text-s leading-4">
		{label}
	</label>
	{#if icon}
		<div class="absolute">
			<div class="absolute top-[34px] left-4">
				<svelte:component this={icon} />
			</div>
		</div>
	{/if}
	{#if inputType === 'number' && !icon}
		<input type="number" {id} bind:value {placeholder} class={inputClasses()} />
	{:else}
		<input
			type="text"
			{id}
			bind:value
			{placeholder}
			class={inputClasses()}
			class:pl-12={icon}
			disabled={readOnly}
		/>
	{/if}
</div>
