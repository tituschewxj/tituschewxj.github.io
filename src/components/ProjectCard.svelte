<!-- Card component for a project. -->
<script>
	import { Button, Card } from 'flowbite-svelte';
	export let title = 'no title';
	export let link = '/';
</script>

<Card class="relative">
	<p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</p>
	<p class="font-mormal mb-16 whitespace-normal text-sm text-gray-700 dark:text-gray-400">
		<slot />
	</p>
	<Button href={link} class="absolute bottom-6 right-6">Learn more</Button>
</Card>
