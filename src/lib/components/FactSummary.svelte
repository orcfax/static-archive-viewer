<script lang="ts">
	import type { FactStatement, Feed } from '$lib/types';
	import FactCardField from '$lib/components/FactCardField.svelte';
	import BlockchainBadges from '$lib/components/BlockchainBadges.svelte';
	import FormattedCurrencyValue from '$lib/components/FormattedCurrencyValue.svelte';

	export let fact: FactStatement;
	export let feed: Feed;

	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section class="flex flex-col">
	<div
		class="section-container min-w-max border-2 border-primary/20 bg-card p-6 text-card-foreground"
	>
		<header class="flex flex-col">
			<h4 class="self-center text-lg font-semibold">The price of</h4>
			<h4 class="self-center font-extrabold text-primary">
				{@html fact.description}
			</h4>
			<h4 class="self-center font-semibold text-primary">
				({@html fact.inverse_description})
			</h4>
			<h5 class="text-center text-base font-medium">on {fact.validation_date_formatted}</h5>
			<h5 class="text-center text-base font-medium">at {fact.validation_time_formatted}</h5>
			<div class="divider my-2"></div>
		</header>

		<div class="grid grid-cols-1 gap-3 p-2 pb-2 pt-0 sm:grid-cols-2 lg:grid-cols-1">
			<FactCardField name="Feed" value={feed.name} accessory={feed.type_description} />

			<div class="flex">
				<div class="flex flex-col">
					<p class="font-bold">Value:</p>
					<div class="flex gap-2">
						<FormattedCurrencyValue value={fact.value} />
					</div>
				</div>
			</div>

			<FactCardField
				name="Fact Statement ID"
				value={fact.fact_urn}
				allowCopyToClipboard
				ellipsisAndHover
				maxFieldLength={18}
			/>
			<FactCardField
				name="Validation Date"
				value={`${fact.validation_date_formatted} ${fact.validation_time_formatted}`}
				accessory=""
			/>
		</div>
		<BlockchainBadges {fact} class="-mb-4 -ml-6 mt-2" />
	</div>
</section>
