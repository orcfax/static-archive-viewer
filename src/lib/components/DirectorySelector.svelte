<script lang="ts">
	import JSZip from 'jszip';

	let zipFile;
	let fileEntries = [];

	const handleFileInput = async (event) => {
		const file = event.target.files[0];
		console.log(file);
		if (file) {
			const arrayBuffer = await file.arrayBuffer();
			console.log(arrayBuffer);
			const zip = await JSZip.loadAsync(arrayBuffer);
			console.log(zip);
			const folder = zip.folder('archive');
			console.log(folder);

			fileEntries = [];
			folder.forEach((relativePath, zipEntry) => {
				fileEntries.push({
					name: zipEntry.name,
					isDir: zipEntry.dir
				});
			});
		}
	};
</script>

<input type="file" accept=".zip" on:change={handleFileInput} />

<ul>
	{#each fileEntries as entry}
		<li>{entry.name} {entry.isDir ? '(Folder)' : ''}</li>
	{/each}
</ul>
