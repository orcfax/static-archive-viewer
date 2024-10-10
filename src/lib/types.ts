import { z } from 'zod';

export type Feed = z.infer<typeof FeedSchema>;

export const DBFeedSchema = z.object({
	id: z.string(),
	network: z.string(),
	feed_id: z.string(),
	type: z.string(),
	name: z.string(),
	version: z.number(),
	status: z.enum(['active', 'inactive']),
	source_type: z.enum(['CEX', 'DEX', '']),
	funding_type: z.enum(['showcase', 'paid', 'subsidized', '']),
	calculation_method: z.string(),
	heartbeat_interval: z.number(),
	deviation: z.number()
});

export const DBFactStatementSchema = z.object({
	id: z.string(),
	network: z.string(),
	policy: z.string(),
	fact_urn: z.string(),
	feed: z.union([z.string(), DBFeedSchema]), // Equal to either the id of the feed, or the feed itself if it was expanded
	value: z.number(), //z.coerce.number(),
	value_inverse: z.number(), //z.coerce.number(),
	validation_date: z.string(), //z.coerce.date(),
	publication_date: z.string(), //z.coerce.date(),
	transaction_id: z.string(),
	storage_urn: z.string(),
	block_hash: z.string(),
	output_index: z.number(),
	address: z.string(),
	slot: z.number(),
	statement_hash: z.string(),
	publication_cost: z.number()
});
export type DBFactStatement = z.infer<typeof DBFactStatementSchema>;

export const FactStatementSchema = DBFactStatementSchema.extend({
	fact_id: z.string(), // Equal to the fact_urn but without the "urn:orcfax:" prefix
	formatted_value: z.string(),
	formatted_inverse_value: z.string(),
	description: z.string(),
	inverse_description: z.string(),
	validation_date_formatted: z.string(),
	validation_time_formatted: z.string(),
	publication_date_formatted: z.string(),
	publication_time_formatted: z.string()
});
export type FactStatement = z.infer<typeof FactStatementSchema>;

export const AssetSchema = z.object({
	ticker: z.string(),
	name: z.string().optional(),
	url: z.string().optional(),
	image: z.string().optional(),
	backgroundColor: z.string().optional()
});

export const DBFeedWithDataSchema = DBFeedSchema.extend({
	latestFact: DBFactStatementSchema,
	totalFacts: z.number(),
	type_description: z.string(),
	base_asset: AssetSchema,
	quote_asset: AssetSchema,
	oneDayAgo: z.number(),
	threeDaysAgo: z.number(),
	sevenDaysAgo: z.number()
});

export type DBFeedWithData = z.infer<typeof DBFeedWithDataSchema>;

export const FeedHistoricalValuesSchema = z.object({
	feedID: z.string(),
	oneDayAgo: z.number(),
	threeDaysAgo: z.number(),
	sevenDaysAgo: z.number()
});

export type FeedHistoricalValues = z.infer<typeof FeedHistoricalValuesSchema>;

export const FeedSchema = DBFeedWithDataSchema.extend({
	latestFact: FactStatementSchema
});

export interface ArchiveExplorerResponse {
	fact: FactSourceMessage;
	directoryTree: DirectoryNode[] | null;
	files: ArchivedFile[] | null;
}

export interface ArchiveDetails {
	sources: Source[];
	collectionTimestamp: string;
	collectorNodeID: string;
	contentSignature: string;
	calculationMethod: string;
	validationDate: string;
	sourceType: string;
}

export interface ArchiveContents {
	fact: FactStatement;
	directoryTree: DirectoryNode[];
	files: ArchivedFile[];
	details: ArchiveDetails;
}

export interface Archive extends ArchiveContents {
	selectedItem: string | undefined;
	selectedFile: ArchivedFile | undefined;
}

export interface DirectoryNode {
	type: 'file' | 'folder';
	name: string;
	nodes?: DirectoryNode[];
}

export interface ArchivedFile {
	name: string;
	fileName: string;
	extension: string;
	content: string | object;
}

export interface FactSourceMessage {
	'@context': 'https://schema.org';
	'@type': 'Message';
	name: string;
	sender: string;
	identifier: string;
	dateReceived: string;
	messageAttachment: {
		encoding: string;
		text: string | { request_url: string; response?: string | object };
	};
}

export const SourceSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	type: z.enum(['CEX API', 'DEX LP']),
	website: z.string(),
	image_path: z.string(),
	background_color: z.string(),
	// For CEX sources, assetPairValue is used. For DEX sources base and quote will be used.
	baseAssetValue: z.number().optional(),
	quoteAssetValue: z.number().optional(),
	assetPairValue: z.number().optional()
});
export type Source = z.infer<typeof SourceSchema>;

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
