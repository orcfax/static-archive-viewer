<script lang="ts">
	import { getArchiveState } from '$lib/archive.svelte';
	import FactSummary from '$lib/components/FactSummary.svelte';
	import CalculationDetails from './CalculationDetails.svelte';
	import CollectionDetails from './CollectionDetails.svelte';
	import FactStatementDetailsAccordion from './FactStatementDetailsAccordion.svelte';
	import ValidationDetails from './ValidationDetails.svelte';

	const archive = getArchiveState();
</script>

<section class="flex w-full flex-col rounded-lg">
	<h2 class="scroll-m-28 pb-4 text-3xl font-bold">Archive Summary</h2>
	<div class="section-container flex w-full flex-col items-center space-y-10">
		<div
			class="flex w-full flex-col items-start space-y-8 md:items-center md:justify-around lg:flex-row lg:justify-evenly lg:space-x-8 lg:space-y-0"
		>
			<div class="xxxs:-mt-0 -mt-6 self-center lg:sticky lg:top-28 lg:self-start">
				<FactSummary feed={archive.fact.feed} fact={archive.fact} />
			</div>
			<div class="hidden md:flex md:flex-col md:space-y-4">
				<h4 class="text-2xl font-bold">Archive Details</h4>
				<div class="flex flex-col space-y-8 self-center rounded-lg border p-8">
					<div
						class="flex flex-col space-y-8 md:items-center xl:flex-row xl:justify-evenly xl:space-x-8 xl:space-y-0"
					>
						<CollectionDetails {archive} />
						<div
							class="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 xl:flex-col xl:space-x-0 xl:space-y-8 xl:self-start"
						>
							<CalculationDetails {archive} />
							<ValidationDetails {archive} />
						</div>
					</div>
				</div>
			</div>

			<div class="flex w-full md:hidden">
				<FactStatementDetailsAccordion {archive} fact={archive.fact} />
			</div>
		</div>
	</div>
</section>
