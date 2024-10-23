<script>
	import { Footer } from 'flowbite-svelte';
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import GithubIcon from '../icons/GithubIcon.svelte';
	import LinkedinIcon from '../icons/LinkedinIcon.svelte';
</script>

<div class="flex h-screen flex-col">
	<Navbar />

	<div class="flex flex-1 justify-center p-8">
		<slot />
	</div>

	<!-- REFACTOR: should integrate into main page instead -->
	<!-- <Footer class="flex justify-start gap-4 align-middle md:justify-start">
		<GithubIcon />
		<LinkedinIcon />
	</Footer> -->
</div>
