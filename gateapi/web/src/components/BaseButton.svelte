<script lang="ts">
	type ButtonType = 'primary' | 'secondary'

	export let type: ButtonType = 'primary'
	export let text: string
	export let isDisabled: boolean = false

	const buttonClasses = (): string => {
		const baseClass =
			'w-[124px] h-[42px] text-xs leading-4 font-medium text-center rounded-full transition-transform duration-300 hover:translate-y-1 hover:scale-105'

		return type === 'primary'
			? `${baseClass} text-primary border-[1px] border-solid border-primary`
			: `${baseClass} bg-accent text-white drop-shadow-primary`
	}
</script>

<button
	class={buttonClasses()}
	class:btn-disabled={isDisabled}
	disabled={isDisabled}
	on:click
	data-testid="base-button"
>
	{text}
</button>

<style lang="scss">
	.btn-disabled {
		@apply opacity-40 cursor-not-allowed;
	}
</style>
