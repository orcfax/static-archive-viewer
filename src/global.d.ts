import type { ArchiveContents } from './src/lib/types';

declare global {
	interface Window {
		injectedData: ArchiveContents;
	}
}

export {};
