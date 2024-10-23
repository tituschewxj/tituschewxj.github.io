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
	import type { Item } from '../../types/item';
	let searchTerm = '';
	export let items: Item[] = [];
	export let columnMapping: Item[] = [];

	// Extract the column names (keys) and the corresponding data fields (values)
	const columnNames = Object.values(columnMapping);
	const searchColumn: string =
		columnNames.length > 0 ? Object.values(columnNames[0]).toString() : '';

	$: filteredItems = items.filter((item) => {
		const value = item[Object.keys(Object.values(columnNames)[0])[0]];
		return (
			typeof value === 'string' && value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
		);
	});
</script>

<TableSearch placeholder="Search by {searchColumn}" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead>
		{#each columnNames as columnName}
			<TableHeadCell>{Object.values(columnName)}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each filteredItems as item}
			<TableBodyRow>
				{#each columnNames as columnName}
					<TableBodyCell>{item[Object.keys(columnName)[0]]}</TableBodyCell>
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
