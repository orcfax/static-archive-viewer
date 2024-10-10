<script lang="ts">
	import { createTreeView } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import type { TreeItem } from './tree.svelte';
	import Tree from './tree.svelte';
	import type { DirectoryNode } from '$lib/types';
	import { writable } from 'svelte/store';
	import { getArchiveState } from '$lib/archive.svelte';

	export let directoryTree: DirectoryNode[];

	const archive = getArchiveState();

	function convertNodesIntoTreeItems(nodes: DirectoryNode[]): TreeItem[] {
		const treeItems: TreeItem[] = nodes.map((node) => {
			if (node.type === 'folder') {
				return {
					title: node.name,
					icon: 'folder',
					children: node.nodes ? convertNodesIntoTreeItems(node.nodes) : undefined
				};
			} else {
				return { title: node.name };
			}
		});

		return treeItems;
	}

	$: treeItems = convertNodesIntoTreeItems(directoryTree);

	let expanded = writable<string[]>([]);

	// Expand both folders by default. Not sure how to do this in a more idomatic way.
	$: expanded.set([
		`${treeItems[0].title}-0`,
		`${treeItems[0].children ? treeItems[0].children[2].title + '-2' : ''}`
	]);

	const ctx = createTreeView({
		expanded
	});
	setContext('tree', ctx);

	const {
		elements: { tree },
		states: { selectedItem }
	} = ctx;

	selectedItem.subscribe((value) => {
		const itemId = value?.getAttribute('data-id');
		if (!value || value.hasAttribute('aria-expanded') || typeof itemId !== 'string') return;
		else {
			archive.selectItem(itemId);
		}
	});
</script>

<div class="flex h-[50rem] flex-col">
	<div class="flex flex-col">
		<div class="flex items-center justify-between px-1 py-2 pr-2">
			<h3 class="pl-4 text-lg font-bold">Files</h3>
		</div>
		<hr />
	</div>

	<ul class="h-full overflow-auto px-4 pb-2 pt-2" {...$tree}>
		<Tree {treeItems} />
	</ul>
</div>
