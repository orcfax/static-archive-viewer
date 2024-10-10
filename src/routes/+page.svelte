<script lang="ts">
	import { setArchiveState } from '$lib/archive.svelte';
	import ArchiveExplorer from '$lib/components/ArchiveExplorer.svelte';
	import ArchiveSummary from '$lib/components/ArchiveSummary.svelte';

	const archive = setArchiveState();
</script>

<div
	class="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-14 px-4 md:px-10"
>
	<ArchiveSummary />
	<ArchiveExplorer {archive} />
</div>
