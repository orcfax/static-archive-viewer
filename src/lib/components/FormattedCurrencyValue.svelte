<script lang="ts">
	import { formatCurrencyValue } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		value: number;
		class?: string;
	}
	const { value, class: className = undefined }: Props = $props();
</script>

<span class={`whitespace-nowrap ${className}`}>
	{@html formatCurrencyValue(value)}
</span>
