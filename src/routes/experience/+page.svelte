<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
</script>

<div>
	<Timeline class="md:m-8 md:max-w-xl">
		<TimelineItem title="Computing for Voluntary Welfare Organisations" date="May 2023">
			<p class="whitespace-normal text-sm text-gray-700 dark:text-gray-400">
				Computing for Voluntary Welfare Organisations (CVWO) is an NUS programme that builds and
				maintains quality IT systems for Voluntary Welfare Organisations (VWOs). Working in a team
				of 7, I maintained and improved the Case Management System (CMS). I ported the CMS backend
				from Ruby on Rails to Golang, resulting in significant performance improvements, as well as
				long term maintainability of the codebase. I also made bug fixes and enhancements for our
				partner VWOs, which streamlines their workflow, allowing them to spend their time and energy
				on helping their beneficiaries instead.
			</p>
		</TimelineItem>
		<TimelineItem title="Source Academy" date="January 2023">
			<p class="whitespace-normal text-sm text-gray-700 dark:text-gray-400">
				Source Academy is a platform used by NUS students to learn computational thinking in
				CS1101S, Programming Methodology I. Working as a pair, I designed and implemented Source
				Academy's Arcade2D module, which uses Phaser 3. This module provides students a way to
				create 2D games through applying what they have learnt.
			</p>
		</TimelineItem>
	</Timeline>
</div>
