<script lang="ts">
	import FactCardField from '$lib/components/FactCardField.svelte';
	import { FactStatementData, type FactStatement } from '$lib/fact.svelte';

	interface Props {
		fact: FactStatement;
	}
	let { fact }: Props = $props();
</script>

<section class="flex flex-col bg-card">
	<div
		class="min-w-max rounded-lg border-2 border-primary/20 bg-muted p-6 text-card-foreground dark:bg-muted/50"
	>
		<header class="flex flex-col">
			<h4 class="self-center text-lg font-semibold">The price of</h4>
			<h4 class="self-center font-extrabold text-[#58938d] dark:text-primary">
				{@html fact.description}
			</h4>
			<h4 class="self-center font-semibold text-[#58938d] dark:text-primary">
				{@html fact.inverse_description}
			</h4>
			<h5 class="text-center text-base font-medium">on {fact.formatted_validation_date}</h5>
			<h5 class="text-center text-base font-medium">at {fact.formatted_validation_time}</h5>
			<div class="divider my-2"></div>
		</header>

		<div class="grid grid-cols-1 gap-3 p-2 pb-2 pt-0 sm:grid-cols-2 lg:grid-cols-1">
			<FactCardField name="Feed" value={fact.feed_name} accessory={fact.feed_type} />
			<FactCardField name="Value" value={fact.value} />
			<FactCardField
				name="Fact Statement ID"
				value={fact.fact_urn}
				allowCopyToClipboard
				ellipsisAndHover
				maxFieldLength={18}
			/>
			<FactCardField
				name="Validation Date"
				value={`${fact.formatted_validation_date} ${fact.formatted_validation_time}`}
				accessory={FactStatementData.getTimeSinceValidation(fact.validation_date)}
			/>
		</div>
	</div>
</section>
