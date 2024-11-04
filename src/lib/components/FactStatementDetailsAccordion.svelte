<script lang="ts">
	import type { Archive } from '$lib/archive.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import CollectionDetails from '$lib/components/CollectionDetails.svelte';
	import ValidationDetails from '$lib/components/ValidationDetails.svelte';
	import CalculationDetails from '$lib/components/CalculationDetails.svelte';

	interface Props {
		archive: Archive;
	}
	const { archive }: Props = $props();
</script>

<div class="flex w-full flex-col">
	<h3 class="text-2xl font-bold">Fact <span class="hidden xxs:inline">Statement</span> Details</h3>
	<Accordion.Root class="w-full" multiple={true}>
		<Accordion.Item value="collection">
			<Accordion.Trigger class="text-xl font-bold">Collection</Accordion.Trigger>
			<Accordion.Content class="flex flex-col items-center md:items-start">
				<CollectionDetails {archive} />
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="calculation">
			<Accordion.Trigger class="text-xl font-bold">Calculation</Accordion.Trigger>
			<Accordion.Content class="flex flex-col items-center md:items-start">
				<CalculationDetails {archive} />
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="validation">
			<Accordion.Trigger class="text-xl font-bold">Validation</Accordion.Trigger>
			<Accordion.Content class="flex flex-col items-center md:items-start">
				<ValidationDetails {archive} />
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
