<script lang="ts">
	import { getArchiveState } from '$lib/archive.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import FileViewer from '$lib/components/FileViewer.svelte';
	import TreeView from '$lib/components/TreeView/index.svelte';

	const archive = getArchiveState();
</script>

<div class="w-full">
	<h3 class="pb-4 text-2xl font-bold">Archive Explorer</h3>
	{#if archive.directoryTree && archive.files}
		<Resizable.PaneGroup
			class="h-80 rounded-lg border-2 bg-card text-card-foreground"
			direction="horizontal"
		>
			<Resizable.Pane defaultSize={30}>
				<div class="overflow-auto">
					<TreeView />
				</div>
			</Resizable.Pane>
			<Resizable.Handle withHandle />
			<Resizable.Pane defaultSize={70}>
				<FileViewer file={archive.selectedFile} />
			</Resizable.Pane>
		</Resizable.PaneGroup>
	{:else}
		<div
			class="flex w-full flex-col items-center justify-center rounded-lg border bg-card text-center text-card-foreground sm:text-start"
		>
			<h4 class="w-fit px-12 pt-12 text-lg font-extrabold">Archive Unavailable</h4>
			<p class="w-fit px-12 pb-12">Please check back or refresh in a few minutes.</p>
		</div>
	{/if}
</div>
