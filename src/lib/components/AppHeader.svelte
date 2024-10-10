<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<header class="bg-section fixed left-0 top-0 z-50 w-full overflow-hidden">
	<div class="flex items-center justify-between p-0 sm:flex-row sm:p-1">
		<a class="flex h-fit gap-0 normal-case" href="/">
			<!-- <img
				class="w-[75px] transform transition delay-150 duration-300 ease-in-out hover:-rotate-45 lg:w-20"
				src={orcfaxLogo}
				alt="The Orcfax mascot and logo, Echo."
			/> -->
			<div class="flex-col pl-5">
				<h2 class="-ml-7 mt-2 text-3xl font-bold text-secondary-foreground">Orcfax</h2>
				<h3 class="water-reflection-text -mt-2 pl-0 text-2xl font-extrabold text-primary lg:pl-2">
					archive
				</h3>
			</div>
		</a>
		<div class="mr-4 flex h-full space-x-4">
			<ThemeToggle />
		</div>
	</div>
	<Separator decorative />
</header>
