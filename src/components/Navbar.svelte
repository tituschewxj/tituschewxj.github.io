<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, DarkMode } from 'flowbite-svelte';
	import { page } from '$app/stores';
</script>

<Navbar let:hidden let:toggle class="bg-gray-50">
	<NavBrand href="/" class="ml-8">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Titus Chew</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={$page.url.pathname == '/'}>Home</NavLi>
		<NavLi href="/about" active={$page.url.pathname == '/about'}>About</NavLi>
		<NavLi href="/projects" active={$page.url.pathname == '/projects'}>Projects</NavLi>
		<NavLi href="/experience" active={$page.url.pathname == '/experience'}>Experience</NavLi>
	</NavUl>
	<DarkMode class="hidden md:block" />
</Navbar>
