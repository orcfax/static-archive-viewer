<script lang="ts">
	import { formatCurrencyValue, formatSumValue } from '$lib/utils';
	import type { Archive, Source } from '$lib/types';
	import { Divide, Equal } from 'lucide-svelte';
	import FactCardField from '$lib/components/FactCardField.svelte';

	export let archive: Archive;

	function getMedianAssetPairValue(sources: Source[]): number | null {
		if (sources.length === 0) {
			return null;
		}

		// Extract assetPairValue from each source
		const values = sources.map((source) => source.assetPairValue ?? 0);

		// Sort values in ascending order
		values.sort((a, b) => a - b);

		const midIndex = Math.floor(values.length / 2);

		// If odd, return the middle value
		if (values.length % 2 !== 0) {
			return values[midIndex];
		}

		// If even, return the average of the two middle values
		const mid1 = values[midIndex - 1];
		const mid2 = values[midIndex];
		return (mid1 + mid2) / 2;
	}
</script>

<section class="flex w-fit max-w-72 flex-col">
	<h3 class="hidden pb-4 text-xl font-bold md:inline">Calculation</h3>

	<div class="section-container bg-card p-6 text-card-foreground">
		{#if archive.details}
			{@const baseAssetValueSum = archive.details.sources.reduce(
				(acc, source) => acc + (source.baseAssetValue || 0),
				0
			)}
			{@const quoteAssetValueSum = archive.details.sources.reduce(
				(acc, source) => acc + (source.quoteAssetValue || 0),
				0
			)}
			{@const isCEX = archive.details.sourceType === 'CEX'}
			{@const isDEX = archive.details.sourceType === 'DEX'}

			<div class="grid grid-cols-1 gap-4">
				<FactCardField name="Calculation Method" value={archive.details.calculationMethod} />
				{#if archive.details.sources.length > 0}
					{#if isCEX}
						{@const midIndex = Math.floor(archive.details.sources.length / 2)}
						{@const isOddSources = archive.details.sources.length % 2 !== 0}
						{#if isOddSources}
							<FactCardField
								name="Median Value"
								value={getMedianAssetPairValue(archive.details.sources) ?? 0}
							/>
						{:else}
							<div
								class="flex flex-col items-center space-y-3 rounded-lg border bg-secondary/90 p-3"
							>
								<FactCardField
									name="Middle Values"
									value={`( ${archive.details.sources[midIndex - 1].assetPairValue} + ${archive.details.sources[midIndex].assetPairValue} )`}
								/>
								<Divide class="stroke-primary" />
								<span>2</span>
								<Equal class="stroke-primary" />
								<FactCardField
									name="Median Value"
									value={getMedianAssetPairValue(archive.details.sources) ?? 0}
								/>
							</div>
						{/if}
					{:else if isDEX}
						<div class="flex flex-col items-center space-y-3 rounded-lg border bg-secondary/90 p-3">
							<FactCardField name="Quote Sum" value={formatSumValue(quoteAssetValueSum)} />
							<Divide class="stroke-primary" />
							<FactCardField name="Base Sum" value={formatSumValue(baseAssetValueSum)} />
							<Equal class="stroke-primary" />
							<FactCardField
								name="Final Value"
								value={formatCurrencyValue(quoteAssetValueSum / baseAssetValueSum)}
								showWithHTML
							/>
						</div>
					{/if}
				{/if}
			</div>
		{:else}
			<div class="flex flex-col">
				<h4 class="text-lg font-bold">Data Unavailable</h4>
				<p>Please check back later.</p>
			</div>
		{/if}
	</div>
</section>
