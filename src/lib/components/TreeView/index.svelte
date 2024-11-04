<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { createTreeView } from '@melt-ui/svelte';
	import { getArchiveState, type DirectoryNode } from '$lib/archive.svelte';
	import Tree, { type TreeItem } from '$lib/components/TreeView/tree.svelte';

	const archive = getArchiveState();
	console.log('test tree index: ', archive);

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

	$: treeItems = convertNodesIntoTreeItems(archive.directoryTree);

	let expanded = writable<string[]>([]);

	// Expand both folders by default. Not sure how to do this in a more idomatic way.$: expanded.set([
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
