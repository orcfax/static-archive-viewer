import { z } from 'zod';
import { FactStatementData, FactStatementSchema, type FactStatement } from '$lib/fact.svelte';
import { getContext, setContext } from 'svelte';

export class ArchiveState {
	fact: FactStatement;
	files: ArchivedFile[];
	directoryTree: DirectoryNode[];
	details: ArchiveDetails;
	selectedItem = $state<string>();
	selectedFile = $state<ArchivedFile>();
	timeSinceValidated = $state<string>();

	constructor() {
		const data = ArchiveContentsSchema.parse(window.injectedData);
		this.fact = new FactStatementData(data.fact);
		this.files = data.files;
		this.directoryTree = data.directoryTree;
		this.details = data.details;
		this.selectedItem = `${data.files[0].fileName}-0`;
		this.selectedFile = data.files[0];
	}

	selectItem(item: string) {
		this.selectedItem = item;
		this.selectedFile = this.files.find((file) =>
			file.fileName.includes(item.substring(0, item.length - 2))
		);
	}
}

// Archive State Context Setup
const ARCHIVE_KEY = Symbol('ARCHIVE');

export function setArchiveState() {
	return setContext(ARCHIVE_KEY, new ArchiveState());
}

export function getArchiveState() {
	return getContext<ReturnType<typeof setArchiveState>>(ARCHIVE_KEY);
}

// Archive Schemas and Types
export const SourceSchema = z.object({
	name: z.string(),
	description: z.string(),
	type: z.enum(['CEX API', 'DEX LP']),
	website: z.string(),
	// imagePath: z.string(), TODO: Add source SVGs
	background_color: z.string(),
	// For CEX sources, assetPairValue is used. For DEX sources base and quote will be used.
	baseAssetValue: z.number().optional(),
	quoteAssetValue: z.number().optional(),
	assetPairValue: z.number().optional()
});
export type Source = z.infer<typeof SourceSchema>;

export const ArchiveDetailsSchema = z.object({
	sources: z.array(SourceSchema),
	collectionTimestamp: z.string(),
	collectorNodeID: z.string(),
	contentSignature: z.string(),
	calculationMethod: z.string(),
	validationDate: z.string(),
	sourceType: z.string()
});
export type ArchiveDetails = z.infer<typeof ArchiveDetailsSchema>;

export interface DirectoryNode {
	type: 'file' | 'folder';
	name: string;
	nodes?: DirectoryNode[];
}

// Use z.lazy to handle recursive typing
export const DirectoryNodeSchema: z.ZodType<DirectoryNode> = z.lazy(() =>
	z.object({
		type: z.union([z.literal('file'), z.literal('folder')]),
		name: z.string(),
		nodes: z.array(DirectoryNodeSchema).optional()
	})
);

export const ArchivedFileSchema = z.object({
	name: z.string(),
	fileName: z.string(),
	extension: z.string(),
	// TODO: Define all file schemas and check if it is one of them
	content: z.union([z.string(), z.object({}).passthrough()])
});
export type ArchivedFile = z.infer<typeof ArchivedFileSchema>;

export const ArchiveContentsSchema = z.object({
	fact: FactStatementSchema,
	directoryTree: z.array(DirectoryNodeSchema),
	files: z.array(ArchivedFileSchema),
	details: ArchiveDetailsSchema
});
export type ArchiveContents = z.infer<typeof ArchiveContentsSchema>;

export const ArchiveSchema = ArchiveContentsSchema.extend({
	selectedItem: z.string().optional(),
	selectedFile: ArchivedFileSchema.optional()
});
export type Archive = z.infer<typeof ArchiveSchema>;

export const CollectionEventSchema = z.object({
	'@type': z.literal('Event'),
	description: z.string(),
	startDate: z.string(),
	recordedIn: z.object({
		'@type': z.literal('CreativeWork'),
		description: z.object({
			'@type': z.literal('TextObject'),
			comment: z.string(),
			sha256: z.string()
		}),
		hasPart: z.tuple([
			z.object({
				'@type': z.literal('CreativeWork'),
				description: z.literal('collecting timestamp'),
				text: z.string()
			}),
			z.object({
				'@type': z.literal('CreativeWork'),
				description: z.string().startsWith('data points for'),
				text: z.array(z.string())
			}),
			z.object({
				'@type': z.literal('CreativeWork'),
				description: z.literal('node identifier (uuid)'),
				text: z.string()
			})
		])
	})
});
export type CollectionEvent = z.infer<typeof CollectionEventSchema>;

export const ValidationFileSchema = z.object({
	'@context': z.literal('https://schema.org'),
	type: z.literal('MediaObject'),
	identifier: z.string(),
	isBasedOn: z.object({
		'@type': z.literal('MediaObject'),
		name: z.string(),
		identifier: z.string()
	}),
	contributor: z.object({
		'@type': z.literal('Organization'),
		name: z.string(),
		locationCreated: z.object({
			address: z.object({
				'@type': z.literal('PostalAddress'),
				addressLocality: z.string(),
				addressRegion: z.string(),
				geo: z.string()
			})
		})
	}),
	additionalType: z.tuple([CollectionEventSchema, z.unknown()])
});
export type ValidationFile = z.infer<typeof ValidationFileSchema>;

export const DEXValidationFileSchema = ValidationFileSchema.extend({
	additionalType: z.tuple([
		CollectionEventSchema,
		z.object({
			'@type': z.literal('Event'),
			description: z.string().startsWith('average price is determined by dividing total volume of'),
			startDate: z.string(),
			about: z.object({
				'@type': z.literal('Observation'),
				measurementMethod: z.tuple([
					z.string().startsWith('volume/liquidity average sum(valueReference[1])')
				]),
				value: z.coerce.number(),
				valueReference: z.array(
					z
						.string()
						.transform((str) => JSON.parse(str))
						.pipe(z.array(z.number()))
				)
			})
		})
	])
});
export type DEXValidationFile = z.infer<typeof DEXValidationFileSchema>;

export const CEXValidationFileSchema = ValidationFileSchema.extend({
	additionalType: z.tuple([
		CollectionEventSchema,
		z.object({
			'@type': z.literal('Event'),
			description: z.literal('selection of median value from collected node data'),
			startDate: z.string(),
			about: z.object({
				'@type': z.literal('StatisticalVariable'),
				measurementMethod: z.literal(
					'median calculation of a minimum of three data sources from the selected collector node'
				),
				measurementTechnique: z.array(
					z.object({
						'@type': z.literal('PropertyValue'),
						name: z.string(),
						value: z.string()
					})
				),
				variableMeasured: z.object({
					'@type': z.literal('Observation'),
					measurementMethod: z.literal('median value'),
					value: z.coerce.number(),
					valueReference: z.array(z.coerce.number())
				})
			})
		})
	])
});
export type CEXValidationFile = z.infer<typeof CEXValidationFileSchema>;
