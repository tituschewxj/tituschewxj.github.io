<script lang="ts">
	import Table from '../../components/Table.svelte';
	import { TabItem, Tabs } from 'flowbite-svelte';
	let courseworkItems: string[][] = [
		['CS1101S Programming Methodology I', 'Y1S1'],
		['CS1231S Discrete Structures', 'Y1S1'],
		['CS2030S Programming Methodology II', 'Y1S2'],
		['CS2040S Data Structures and Algorithms', 'Y1S2'],
		['CS2100 Computer Organisation', 'Y2S1'],
		['CS2105 Introduction to Computer Networks', 'Y2S1'],
		['CS2109S Introduction to AI and Machine Learning', 'Y2S1'],
		['CS3241 Computer Graphics', 'Y2S1'],
		['CS3230 Design and Analysis of Algorithms', 'Y2S1'],
		['CS2101 Effective Communication for Computing Professionals', 'Y2S2'],
		['CS2102 Database Systems', 'Y2S2'],
		['CS2103T Software Engineering', 'Y2S2'],
		['CS2106 Introduction to Operating Systems', 'Y2S2'],
		['CS2107 Introduction to Information Security', 'Y2S2'],
	];

	let skillItems: string[][] = [
		['Ruby on Rails', 'Backend'],
		['Golang', 'Programming language'],
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
		['Flowbite Svelte', 'Component library'],
		['GORM', 'ORM library'],
		['REST API', 'API'],
		['Phaser 3', 'Game framework'],
		['JavaFX', 'Java library']
	];
</script>

<div>
	<Tabs>
		<TabItem open title="Relevant Coursework">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				As a computer science sophomore, here are some relevant courses I have taken.
			</p>
			<Table headers={['Relevant Coursework', 'Taken in']} items={courseworkItems} />
		</TabItem>
		<TabItem title="Skills">
			<p class="font-mormal m-8 whitespace-pre-line text-sm text-gray-700 dark:text-gray-400">
				Here are some technologies that I have worked with before.
			</p>

			<Table headers={['Skills', 'Description']} items={skillItems} />
		</TabItem>
	</Tabs>
</div>
