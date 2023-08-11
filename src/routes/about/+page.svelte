<script lang="ts">
	import Table from '../../components/Table.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	let courseworkItems: string[][] = [
		['CS1101S Programming Methodology I', 'Year 1 Semester 1'],
		['CS1231S Discrete Structures', 'Year 1 Semester 1'],
		['CS2030S Programming Methodology II', 'Year 1 Semester 2'],
		['CS2040S Data Structures and Algorithms', 'Year 1 Semester 2'],
		['CS2100 Computer Organisation', 'Ongoing'],
		['CS2109S Introduction to AI and Machine Learning', 'Ongoing'],
		['CS3241 Computer Graphics', 'Ongoing'],
		['CS3230 Design and Analysis of Algorithms', 'Ongoing']
	];

	let skillItems: string[][] = [
		['Ruby on Rails', 'Backend'],
		['Golang', 'Backend programming language'],
		['TypeScript', 'Programming language'],
		['React', 'Frontend framework'],
		['MySQL', 'Database language'],
		['PostgreSQL', 'Database language'],
		['C++', 'Programming language'],
		['JavaScript', 'Programming language'],
		['Java', 'Programming language'],
		['Microsoft Office Suite', 'Word, PowerPoint, Excel'],
		['Visual Basic for Applications (VBA)', 'Programming language'],
		['Arduino', 'Hardware'],
		['Python', 'Programming language'],
		['Svelte', 'Frontend framework'],
		['Git', 'Version control'],
		['Markdown', 'Markup language'],
		['Unity Game Engine', 'Game engine'],
		['C#', 'Programming language'],
		['HTML', 'Markup langauge'],
		['CSS', 'Style sheet language'],
		['Vim', 'Text editor'],
		['Material UI', 'Component library'],
		['Flowbite Svelte', 'Component library']
	];
</script>

<div>
	<Tabs>
		<TabItem open title="Relevant Coursework">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				As a computer science sophomore, here are some relevant courses I have taken, or am
				currently taking.
			</p>
			<Table headers={['Relevant Coursework', 'Taken in']} items={courseworkItems} />
		</TabItem>
		<TabItem title="Skills">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				Here some technologies that I have worked with before.
			</p>

			<Table headers={['Skills', 'Description']} items={skillItems} />
		</TabItem>
	</Tabs>
</div>
