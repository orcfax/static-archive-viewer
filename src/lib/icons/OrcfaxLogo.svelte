<script lang="ts">
	interface Props {
		height?: string;
		width?: string;
		className?: string;
	}
	let { height = '60', width = '60', className }: Props = $props();
</script>

<svg
	class={className}
	xml:space="preserve"
	{width}
	{height}
	style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
	viewBox="0 0 15000 15000"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<style type="text/css">
   <![CDATA[
    .fil1 {fill:black}
    .fil0 {fill:#63A29B}
    .fil2 {fill:white}
   ]]>
		</style>
	</defs>
	<g id="Layer_x0020_1">
		<metadata id="CorelCorpID_0Corel-Layer" />
		<g id="_258096704">
			<circle class="fil0" cx="7500" cy="7505" r="7090" />
			<path
				class="fil1"
				d="M3176 9919c-354,-393 -388,-938 -49,-1388 5,-1609 1090,-3351 2871,-3920 3,-1 8,0 8,-3l2 -2065c0,-184 106,-270 292,-271 1305,-4 2605,1068 2706,2449 0,0 1,0 1,0 1666,658 2595,2409 2595,3749l0 1369c0,636 -336,1046 -1071,1046l-2017 0c-668,-8 -1455,-468 -1843,-1189l-890 -7c-210,-11 -242,-286 -141,-385l768 -777c-198,-1513 -2120,-1759 -2701,-357 302,-49 542,-13 740,103 264,155 439,322 183,565l-1206 1157c-64,43 -146,28 -246,-77z"
			/>
			<path
				class="fil2"
				d="M4366 6838c1683,-1598 4189,-540 4380,1653l-10 1874c-755,-11 -1193,-310 -1473,-691 -238,-324 -356,-746 -359,-1234 -4,-743 -930,-2110 -2538,-1603z"
			/>
			<path
				class="fil2"
				d="M10703 9592c336,-81 357,-548 278,-794 -99,-311 -505,-484 -643,159l0 635 365 0z"
			/>
		</g>
	</g>
</svg>
