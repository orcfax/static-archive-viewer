<script lang="ts">
	import type { Archive } from '$lib/types';
	import FactCardField from '$lib/components/FactCardField.svelte';
	import SourceTable from '$lib/components/SourceTable.svelte';

	export let archive: Archive;
</script>

<section class="flex w-fit flex-col md:w-full xl:w-fit xl:self-start">
	<h3 class="hidden pb-4 text-xl font-bold md:inline">Collection</h3>

	<div class="section-container space-y-6 bg-card p-6 text-card-foreground">
		{#if archive.details}
			{@const isCEX = archive.details.sourceType === 'CEX'}
			{@const sortedSources = archive.details.sources.sort(
				(a, b) => (a.assetPairValue ?? 0) - (b.assetPairValue ?? 0)
			)}
			<div class="xs:grid-cols-2 grid grid-cols-1 gap-4">
				<FactCardField name="Collecting Timestamp" value={archive.details.collectionTimestamp} />
				<FactCardField
					name="Collector Node ID"
					value={archive.details.collectorNodeID}
					ellipsisAndHover
				/>
			</div>
			<div class={`flex flex-col ${isCEX ? 'items-center' : ''}`}>
				<h4 class="pb-4 font-bold">Primary Sources:</h4>
				<div class="xs:flex hidden space-x-6">
					<SourceTable sources={isCEX ? sortedSources : archive.details.sources} showWithValues />
				</div>
				<ol class="xs:hidden flex">
					{#each isCEX ? sortedSources : archive.details.sources as source, index (source.id)}
						<!-- <li class={`${index !== 0 ? '-ml-4' : ''}`}>
							<SourceBadge {source} />
						</li> -->
					{/each}
				</ol>
				<p class="xs:hidden mt-2 inline text-xs text-muted-foreground">
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
