<script lang="ts">
	import { slide } from 'svelte/transition'

	type ToastType = 'success' | 'error'

	export let message: string
	export let type: ToastType = 'success'
</script>

<div
	transition:slide
	data-testid="base-toast"
	class:bg-red={type === 'error'}
	class="flex z-50 items-center justify-center shadow-primary-shadow fixed right-6 top-6 w-[240px] h-16 rounded-full bg-accent text-white"
>
	{message}
</div>
