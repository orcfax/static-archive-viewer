# Orcfax Archive Viewer

Orcfax Archive Viewer is a Svelte app that compiles everything needed to explore a single Orcfax Fact Statement archive from Arweave into a single static `index.html` file that is intended to be used locally and offline.

The compiled static `index.html` file is packaged along with the [Orcfax Explorer](https://github.com/orcfax/explorer.orcfax.io) as a static asset so that it can be downloaded and packaged along with a full Fact Statement archive folder which is fetched from Arweave.

The viewer does not access the folder of archived files directly, instead, on download from the Explorer, a JSON representation of the archive's contents are injected into a global window variable so it can be used internally.

An example JSON file is included in the repo for local development purposes.

## Developing

Clone the repository and install the dependencies:

```sh
git clone git@github.com:orcfax/orcfax-archive-viewer.git
cd orcfax-archive-viewer
pnpm i
```

## Building

To run the viewer with local test data, copy the contents of `example-archive.json` and paste it in place of `'DATA_PLACEHOLDER'` (NB. replace the single-quotation marks as well) at the bottom of `/index.html` located at the root of this repository.

Once you have replaced the `'DATA_PLACEHOLDER'` (including quotes) it is recommended to run formatting and linting first. This will prettify the source data.

```bash
pnpm run format
pnpm run lint
```

To create a new production version of the viewer, run:

```bash
pnpm run build
```

After building, you will find `index.html` under the build folder.

## Viewing

Start a development server with:

```bash
pnpm run dev
```

The local archive will be visible at the server location and port on your localhost, e.g. `http://<localhost-ip>:<port>/`. Alternatively, open the `build/index.html` file in your choice of web-browser.
