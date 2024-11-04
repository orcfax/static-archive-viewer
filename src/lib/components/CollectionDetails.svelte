<script lang="ts">
	import type { Archive } from '$lib/archive.svelte';
	import SourceTable from '$lib/components/SourceTable.svelte';
	import FactCardField from '$lib/components/FactCardField.svelte';

	interface Props {
		archive: Archive;
	}
	const { archive }: Props = $props();
</script>

<section class="flex w-fit flex-col md:w-full xl:w-fit xl:self-start">
	<h3 class="hidden pb-4 text-xl font-bold md:inline">Collection</h3>

	<div class="space-y-6 rounded-lg border bg-card p-6 text-card-foreground">
		{#if archive.details}
			{@const isCEX = archive.details.sourceType === 'CEX'}
			{@const sortedSources = archive.details.sources.sort(
				(a, b) => (a.assetPairValue ?? 0) - (b.assetPairValue ?? 0)
			)}
			<div class="grid grid-cols-1 gap-4 xs:grid-cols-2">
				<FactCardField name="Collecting Timestamp" value={archive.details.collectionTimestamp} />
				<FactCardField
					name="Collector Node ID"
					value={archive.details.collectorNodeID}
					ellipsisAndHover
				/>
			</div>
			<div class={`flex flex-col ${isCEX ? 'items-center' : ''}`}>
				<h4 class="pb-4 font-bold">Primary Sources:</h4>
				<div class="hidden space-x-6 xs:flex">
					<SourceTable sources={isCEX ? sortedSources : archive.details.sources} showWithValues />
				</div>
				<p class="mt-2 inline text-xs text-muted-foreground xs:hidden">
					{archive.details.sources.length} sources
				</p>
			</div>
		{:else}
			<div class="flex flex-col">
				<h4 class="text-lg font-bold">Data Unavailable</h4>
				<p>Please check back later.</p>
			</div>
		{/if}
	</div>
</section>
