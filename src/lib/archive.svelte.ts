import { setContext, getContext } from 'svelte';
import type { ArchivedFile, DirectoryNode, FactStatement, ArchiveDetails } from '$lib/types';
import { contents } from './contents';

// interface ArchiveConstructor {
// 	nodes: DirectoryNode[];
// 	files: ArchivedFile[];
// }

export class Archive {
	fact = $state<FactStatement>();
	files = $state<ArchivedFile[]>([]);
	directoryTree = $state<DirectoryNode[]>([]);
	details = $state<ArchiveDetails>();
	selectedItem = $state<string>();
	selectedFile = $state<ArchivedFile>();

	constructor() {
		this.fact = contents.fact;
		this.files = contents.files;
		this.directoryTree = contents.directoryTree;
		this.details = contents.details;
		this.selectedItem = `${contents.files[0].fileName}-0`;
		this.selectedFile = contents.files[0];
	}

	selectItem(item: string) {
		this.selectedItem = item;
		this.selectedFile = this.files.find((file) =>
			file.fileName.includes(item.substring(0, item.length - 2))
		);
	}
}

const ARCHIVE_KEY = Symbol('ARCHIVE');

export function setArchiveState() {
	return setContext(ARCHIVE_KEY, new Archive());
}

export function getArchiveState() {
	return getContext<ReturnType<typeof setArchiveState>>(ARCHIVE_KEY);
}
