<script lang="ts">
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
	import CopyingIcon from '$lib/icons/CopyingIcon.svelte';

	interface Props {
		value: string | number;
		tooltipDirection?: 'tooltip-right' | 'tooltip-left' | 'tooltip-bottom' | 'tooltip-top';
		class?: string;
	}
	let { value, tooltipDirection = 'tooltip-top', class: className = '' }: Props = $props();

	let isCopying = $state(false);
	let showCopiedTooltip = $state(false);

	function handleCopyToClipboard(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		navigator.clipboard.writeText(value.toString());
		isCopying = true;
		showCopiedTooltip = true;
		setTimeout(() => {
			isCopying = false;
		}, 1000);
		setTimeout(() => {
			showCopiedTooltip = false;
		}, 1500);
		return;
	}
</script>

<button
	class={`group relative isolate z-10 flex h-9 w-9 shrink-0 items-center justify-center ${tooltipDirection} ${className}`}
	class:tooltip={showCopiedTooltip}
	class:tooltip-open={showCopiedTooltip}
	data-tip="Copied!"
	onclick={handleCopyToClipboard}
>
	{#if isCopying}
		<CopyingIcon />
	{:else}
		<CopyIcon />
	{/if}
</button>
