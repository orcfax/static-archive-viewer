# Orcfax Archive Viewer

Orcfax Archive Viewer is a Svelte app that compiles everything needed to explore a single Orcfax Fact Statement archive from Arweave into a single static index.html file that is intended to be used locally and offline.

This app's sole purpose is to compile the static index.html file, which is packaged along with the orcfax explorer as a static asset so that it can be downloaded and packaged along with a full Fact Statement archive folder which is fetched from Arweave.

The viewer does not access the folder of archived files directly, instead, on download from the Explorer, a JSON representation of the archive's contents are injected into a global window variable so it can be used internally.

An example JSON file is included in the repo for local development purposes.

## Developing

Once you've cloned the repo and installed dependencies with `pnpm i`, start a development server:

```bash
pnpm run dev
```

To run the viewer with local test data, copy the contents of `example-archive.json` and paste it in place of `'DATA_PLACEHOLDER'` at the bottom of `/index.html` located at the project's root.

## Building

Before creating a new build, it is recommended to run formatting and linting first:
```bash
pnpm run format
pnpm run lint
```

To create a new production version of the viewer, run:
```bash
pnpm run build
```

After building, you will see `index.html` under the build folder. The contents of this file are then to be copied and pasted over the contents of `/static/archive-viewer.html` in the [Explorer](https://github.com/orcfax/explorer.orcfax.io/blob/main/static/archive-viewer.html).
