<script lang="ts">
	import { mode as theme } from 'mode-watcher';
	import json from 'svelte-highlight/languages/json';
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import { atomOneLight, atomOneDark } from 'svelte-highlight/styles';
	import type { ArchivedFile } from '$lib/types';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import CopyToClipboard from './CopyToClipboard.svelte';

	export let file: ArchivedFile | undefined;
</script>

<svelte:head>
	{@html $theme === 'dark' ? atomOneDark : atomOneLight}
</svelte:head>

<div class="h-full rounded-lg">
	{#if file}
		<div class="flex h-[50rem] flex-col">
			<div class="flex flex-col items-center justify-between border-b px-4 py-2">
				<div class="flex w-full items-center justify-between">
					<h3 class="text-lg font-bold">{file.fileName}</h3>
					<div class="flex items-center justify-center gap-2">
						<Tooltip.Root openDelay={150}>
							<Tooltip.Trigger>
								<div
									class="flex items-center justify-center rounded-full border border-card hover:border-border hover:bg-border/50"
								>
									<CopyToClipboard
										value={typeof file.content === 'string'
											? file.content
											: JSON.stringify(file.content, null, 2)}
										class="-mt-0"
									/>
								</div>
							</Tooltip.Trigger>
							<Tooltip.Content side={'top'} sideOffset={6}>
								<p>Copy current file</p>
							</Tooltip.Content>
						</Tooltip.Root>

						<h4 class="font-bold text-primary">{file.extension}</h4>
					</div>
				</div>
			</div>

			<div
				class="h-full min-h-full overflow-auto"
				style={`background-color: ${$theme === 'dark' ? '#282C34' : '#FAFAFA'}`}
			>
				<Highlight
					class="h-full min-h-full overflow-y-scroll"
					language={json}
					code={typeof file.content === 'object'
						? JSON.stringify(file.content, null, 2)
						: file.content.trim()}
					let:highlighted
				>
					<LineNumbers {highlighted} />
				</Highlight>
			</div>
		</div>
	{/if}
</div>
