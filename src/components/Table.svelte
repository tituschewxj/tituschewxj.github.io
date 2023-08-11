<script lang="ts">
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		TableSearch
	} from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	export let searchTerm: string = '';
	export let headers: string[] = ['no title'];
	export let items: string[][] = [];

	const sortColumn = writable(0); // default sort key
	const sortDirection = writable(1); // default sort direction (ascending)
	const sortItems = writable(items.slice()); // make a copy of the items array

	const sortTable = (column: number) => {
		if ($sortColumn === column) {
			sortDirection.update((val) => -val);
		} else {
			sortColumn.set(column);
			sortDirection.set(1);
		}
	};

	$: {
		// filter
		const filtered = items.filter(
			(rowItem) => rowItem[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
		);

		// sort
		const key = $sortColumn;
		const direction = $sortDirection;
		const sorted = [...filtered].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal < bVal) {
				return -direction;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});

		sortItems.set(sorted);
	}
</script>

<TableSearch placeholder="Search by {headers[0]}" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead class="bg-gray-100">
		{#each headers as title, i}
			{#if i == 0}
				<TableHeadCell on:click={() => sortTable(i)}>
					{title}
				</TableHeadCell>
			{:else}
				<TableHeadCell class="hidden sm:table-cell" on:click={() => sortTable(i)}>
					{title}
				</TableHeadCell>
			{/if}
		{/each}
	</TableHead>
	<TableBody>
		{#each $sortItems as rowItems}
			<TableBodyRow>
				{#each rowItems as item, i}
					{#if i == 0}
						<TableBodyCell>
							{item}
						</TableBodyCell>
					{:else}
						<TableBodyCell class="hidden sm:table-cell">
							{item}
						</TableBodyCell>
					{/if}
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
