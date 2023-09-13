<script lang="ts">
	import { ROUTES } from './routes'
	import { page } from '$app/stores'

	let path: string

	$: path = $page.url.pathname
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main
	class="flex py-4 h-16 bg-white justify-center items-center gap-6 shadow-primary-shadow"
>
	{#each Object.entries(ROUTES) as [name, route]}
		<a
			class="text-s text-primary transition-transform duration-300 hover:text-accent hover:scale-105 hover:translate-y-[-1px]"
			class:current-page={path === route}
			href={route}
		>
			{name}
		</a>
	{/each}
</main>

<style lang="scss">
	.current-page {
		@apply text-accent underline underline-offset-4;
	}
</style>
