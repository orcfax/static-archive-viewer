<script lang="ts">
	import OrcfaxLogo from '$lib/icons/OrcfaxLogo.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<footer
	class="flex w-full flex-col items-center justify-between border-t bg-section p-3 md:flex-row"
>
	<div class="flex items-center gap-2">
		<a href="https://orcfax.io">
			<OrcfaxLogo />
		</a>

		<p class="text-sm font-medium">Copyright © Orcfax Ltd. 2024</p>
		<Separator decorative orientation="vertical" class="h-6" />
		<a href="https://orcfax.io" target="_blank" class="-mt-1 font-bold underline">orcfax.io</a>
	</div>
</footer>
