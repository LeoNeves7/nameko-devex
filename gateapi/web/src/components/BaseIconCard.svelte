<script lang="ts">
	export let text: string
	export let selected: boolean = false
</script>

<button
	class="flex flex-1 items-center justify-center gap-2 border-[1px] h-[72px] lg:max-w-[195px] w-full border-solid rounded-[4px] transition-colors duration-300 hover:text-purple hover:border-purple hover:bg-light-purple text-primary border-secondary"
	data-testid="base-icon-card"
	class:card-active={selected}
	on:click
>
	<slot />
	<h2>{text}</h2>
</button>

<style lang="scss">
	.card-active {
		@apply border-purple text-purple bg-light-purple;
	}
</style>
