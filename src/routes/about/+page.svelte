<script lang="ts">
	import Table from '../../components/v2/Table.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	import courseworkItems from '../../data/courseworkItems.json';
	import skillItems from '../../data/skillItems.json';

	const courseworkItemsColumnMapping = {
		Coursework: 'course',
		'Taken in': 'year'
	};

	const skillItemsColumnMapping = {
		Skills: 'skill',
		Description: 'description'
	};
</script>

<div>
	<Tabs>
		<TabItem open title="Relevant Coursework">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				Here are some computer science courses I have taken.
			</p>
			<!-- <Table headers={['Relevant Coursework', 'Taken in']} items={courseworkItemsArray} /> -->
			<Table columnMapping={courseworkItemsColumnMapping} items={courseworkItems} />
		</TabItem>
		<TabItem title="Skills">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				Here are some technologies that I have worked with before.
			</p>

			<Table columnMapping={skillItemsColumnMapping} items={skillItems} />
		</TabItem>
	</Tabs>
</div>
