<script lang="ts">
	import './app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { setArchiveState } from '$lib/archive.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import ArchiveSummary from '$lib/components/ArchiveSummary.svelte';
	import ArchiveExplorer from '$lib/components/ArchiveExplorer.svelte';

	setArchiveState();
</script>

<ModeWatcher />
<div class="flex h-full min-h-full w-full flex-col">
	<AppHeader />
	<div class="relative mb-14 mt-[120px] bg-background">
		<div
			class="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-14 px-4 md:px-10"
		>
			<ArchiveSummary />
			<ArchiveExplorer />
		</div>
	</div>
	<AppFooter />
</div>
