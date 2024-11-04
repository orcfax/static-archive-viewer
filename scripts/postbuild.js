import { rm } from 'fs/promises';

await rm('build/assets', { recursive: true, force: true });
