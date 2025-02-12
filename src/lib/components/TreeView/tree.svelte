<script context="module" lang="ts">
	import { ArrowRightFromLine, Folder, File, FolderOpen } from 'lucide-svelte';

	type Icon = 'folder' | 'file';

	export type TreeItem = {
		title: string;
		icon?: Icon;
		children?: TreeItem[];
	};

	export const icons = {
		file: File,
		folder: Folder,
		folderOpen: FolderOpen,
		highlight: ArrowRightFromLine
	};
</script>

<script lang="ts">
	import { afterUpdate, getContext } from 'svelte';
	import { getArchiveState } from '$lib/archive.svelte';
	import { melt, type TreeView } from '@melt-ui/svelte';

	const archive = getArchiveState();
	console.log('test tree: ', archive);
	export let treeItems: TreeItem[];
	export let level = 1;

	const {
		elements: { item, group },
		helpers: { isExpanded },
		states: { selectedItem }
	} = getContext<TreeView>('tree');

	const refs: HTMLElement[] = [];
	let wasDefaultSet = false;

	// Set the first item as selected by default.
	afterUpdate(() => {
		if (wasDefaultSet) return;

		const firstFile = refs.find((ref) => ref.getAttribute('data-id') === `bag-info.txt-0`);
		if (firstFile) {
			selectedItem.set(firstFile);
		}
		wasDefaultSet = true;
	});
</script>

{#each treeItems as { title, children, icon }, i}
	{@const itemId = `${title}-${i}`}
	{@const hasChildren = !!children?.length}

	<li class={level !== 1 ? 'pl-4' : ''}>
		<button
			class="flex items-center gap-1 rounded-md p-1 px-2 focus:outline-none focus:ring-2 focus:ring-ring"
			class:bg-input={archive.selectedItem && itemId.includes(archive.selectedItem)}
			use:melt={$item({
				id: itemId,
				hasChildren
			})}
			bind:this={refs[i]}
		>
			{#if icon === 'folder' && hasChildren}
				<svelte:component
					this={icons[$isExpanded(itemId) ? 'folderOpen' : 'folder']}
					class="h-4 w-4"
				/>
			{:else}
				<svelte:component this={icons['file']} class="h-4 w-4 opacity-70" />
			{/if}

			<span class="select-none overflow-ellipsis whitespace-nowrap">{title}</span>
		</button>

		{#if children}
			<ul use:melt={$group({ id: itemId })}>
				<svelte:self treeItems={children} level={level + 1} />
			</ul>
		{/if}
	</li>
{/each}

<style>
	/* Remove docs' focus box-shadow styling. */
	li:focus {
		box-shadow: none !important;
	}
</style>
