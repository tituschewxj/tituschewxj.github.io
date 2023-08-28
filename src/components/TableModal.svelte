<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	export let clickOutsideModal = false;
	export let title: string = 'No title';
	export let content: string = 'No content';
</script>

<Modal {title} bind:open={clickOutsideModal} autoclose outsideclose>
	<p class="font-mormal mb-16 whitespace-normal text-sm text-gray-700 dark:text-gray-400">
		{content}
	</p>
</Modal>
