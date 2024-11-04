<script lang="ts">
	import OrcfaxLogo from '$lib/icons/OrcfaxLogo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<header class="fixed left-0 top-0 z-50 w-full overflow-hidden bg-section">
	<div class="flex items-center justify-between p-0 sm:flex-row sm:p-1">
		<div class="flex h-fit items-center justify-center gap-1 normal-case">
			<OrcfaxLogo
				className="w-fit m-2 transform transition delay-150 duration-300 ease-in-out hover:-rotate-45"
			/>
			<div class="flex-col">
				<h2 class="mt-2 text-3xl font-bold text-secondary-foreground">Orcfax</h2>
				<h3 class="water-reflection-text -mt-2 pl-0 text-2xl font-extrabold text-primary lg:pl-4">
					viewer
				</h3>
			</div>
		</div>
		<div class="mr-4 flex h-full space-x-4">
			<ThemeToggle />
		</div>
	</div>
	<Separator decorative />
</header>
