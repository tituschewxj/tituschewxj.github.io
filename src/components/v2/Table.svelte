<!-- Table V2 displays JSON data -->
<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	let searchTerm = '';
	export let items: any[] = [];

	export let columnMapping: any[] = {};

	// Extract the column names (keys) and the corresponding data fields (values)
	const columnNames = Object.keys(columnMapping);
	const searchColumn: string = columnNames[0];

	$: filteredItems = items.filter(
		(item) =>
			item[columnMapping[searchColumn]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<TableSearch placeholder="Search by {searchColumn}" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead>
		{#each columnNames as columnName}
			<TableHeadCell>{columnName}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each filteredItems as item}
			<TableBodyRow>
				{#each columnNames as columnName}
					<TableBodyCell>{item[columnMapping[columnName]]}</TableBodyCell>
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
