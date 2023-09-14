<script lang="ts">
	import { fade } from 'svelte/transition'

	export let text: string = ''
</script>

<p transition:fade data-testid="base-error-message" class="text-xxxs text-red">
	{text}
</p>
