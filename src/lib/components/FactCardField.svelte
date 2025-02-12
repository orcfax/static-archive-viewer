<script lang="ts">
	import { ellipsis } from '$lib/utils';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';

	interface Props {
		name: string;
		value: string | number;
		accessory?: string;
		maxFieldLength?: number;
		allowCopyToClipboard?: boolean;
		ellipsisAndHover?: boolean;
		midllipsisAndHover?: boolean;
		accessoryLink?: { text: string; link: string } | null;
		showWithHTML?: boolean;
	}
	const {
		name,
		value,
		accessory = '',
		maxFieldLength = 20,
		allowCopyToClipboard = false,
		ellipsisAndHover = false,
		midllipsisAndHover = false,
		accessoryLink = null,
		showWithHTML = false
	}: Props = $props();

	let showWithTooltip = $derived(
		(ellipsisAndHover || midllipsisAndHover) && value.toString().length >= maxFieldLength
	);
</script>

<div class="flex">
	<div class="flex flex-col">
		{#if name}
			<p class="font-bold">{name}:</p>
		{/if}
		<div class="flex">
			{#if showWithTooltip}
				<Tooltip.Root openDelay={150}>
					<Tooltip.Trigger>
						<p class="text-start">
							{ellipsis(value, {
								maxLength: maxFieldLength,
								placement: ellipsisAndHover ? 'end' : 'middle'
							})}
						</p>
					</Tooltip.Trigger>
					<Tooltip.Content side={'top'}>
						<p>
							{#if showWithHTML}
								{@html value}
							{:else}
								{value}
							{/if}
						</p>
					</Tooltip.Content>
				</Tooltip.Root>
			{:else}
				<p class="text-start">
					{#if showWithHTML}
						{@html value}
					{:else}
						{value}
					{/if}
				</p>
			{/if}
			{#if allowCopyToClipboard}
				<CopyToClipboard {value} />
			{/if}
		</div>

		{#if accessoryLink}
			<a href={accessoryLink.link} target="_blank" class="text-primary hover:underline">
				{accessoryLink.text}
			</a>
		{:else if accessory}
			<p class="text-gray-500">{accessory}</p>
		{/if}
	</div>
</div>
