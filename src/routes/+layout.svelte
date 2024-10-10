<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import AppHeader from '$lib/components/AppHeader.svelte';
</script>

<ModeWatcher />
<div class="flex h-full min-h-full w-full flex-col">
	<AppHeader />
	<div class="relative mb-14 mt-[120px] bg-background">
		<slot />
	</div>
	<!-- <AppFooter /> -->
</div>
