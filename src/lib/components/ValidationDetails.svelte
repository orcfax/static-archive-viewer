<script lang="ts">
	import type { Archive } from '$lib/types';
	import FactCardField from '$lib/components/FactCardField.svelte';

	export let archive: Archive;
</script>

<section class="flex w-fit flex-col xl:w-full">
	<h3 class="hidden pb-4 text-xl font-bold md:inline">Validation</h3>

	<div class="section-container bg-card p-6 text-card-foreground">
		{#if archive.details}
			<div class="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-1">
				<FactCardField
					name="Content Signature"
					value={archive.details.contentSignature}
					ellipsisAndHover
					maxFieldLength={15}
				/>
				<FactCardField name="Validation Date" value={archive.details.validationDate} />
			</div>
		{:else}
			<div class="flex flex-col">
				<h4 class="text-lg font-bold">Data Unavailable</h4>
				<p>Please check back later.</p>
			</div>
		{/if}
	</div>
</section>
