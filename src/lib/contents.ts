import type { ArchiveContents } from './types';

export const contents: ArchiveContents = {
	fact: {
		id: 'a6xuzgsnvwjvs56',
		network: 'mbwldyeavp3fjtx',
		policy: '5c7smjg7g2xgnxg',
		fact_urn: 'urn:orcfax:fb36c760-7393-4181-957f-e2037e5276ff',
		feed: {
			id: '79qfm7hfareo99n',
			network: 'mbwldyeavp3fjtx',
			feed_id: 'CER/SHEN-ADA/3',
			type: 'CER',
			name: 'SHEN-ADA',
			version: 3,
			status: 'active',
			source_type: 'DEX',
			funding_type: 'showcase',
			calculation_method: 'weighted mean',
			heartbeat_interval: 3600,
			deviation: 5
		},
		value: 1.0512329079,
		value_inverse: 0.951263896776452,
		validation_date: '2024-10-09T00:00:13.765Z',
		publication_date: '2024-10-09T00:02:15.000Z',
		transaction_id: 'e3c7ec4a92b6d86246212c70018c719994cb10fd421f5aa4cc1c693496420ebe',
		storage_urn: 'urn:arweave:sTX6fLZy6_Uutz-sjq5ESSgHJ-GyZG14ikOp3xdevbM',
		block_hash: '76246889901e1d2e0cf468c5e37ec49b242530bdf4bd461846183ebdd71fe2ad',
		output_index: 9,
		address: 'addr_test1wptjl9uswepg2ej99awz90yc7kx5nu3h6n6nhpkn0v28y3qxq46gc',
		slot: 61776135,
		statement_hash: 'e3bb7f2f485d1998f5d64de144c24b96761fe57dde4622d6f10aa79a2cd5b479',
		publication_cost: 1.45678
	},
	directoryTree: [
		{
			type: 'folder',
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z',
			nodes: [
				{
					type: 'file',
					name: 'bag-info.txt'
				},
				{
					type: 'file',
					name: 'bagit.txt'
				},
				{
					type: 'folder',
					name: 'data',
					nodes: [
						{
							type: 'file',
							name: 'fact-statement-SHEN-ADA-2024-10-09T00-00-13Z.json'
						},
						{
							type: 'file',
							name: 'fact-statement-datum-SHEN-ADA-2024-10-09T00-00-13Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json'
						},
						{
							type: 'file',
							name: 'validation-SHEN-ADA-2024-10-09T00-00-13Z.json'
						},
						{
							type: 'file',
							name: 'version-orcfax-price-feed-schema-v3.json'
						}
					]
				},
				{
					type: 'file',
					name: 'manifest-sha256.txt'
				},
				{
					type: 'file',
					name: 'manifest-sha512.txt'
				},
				{
					type: 'file',
					name: 'tagmanifest-sha256.txt'
				},
				{
					type: 'file',
					name: 'tagmanifest-sha512.txt'
				}
			]
		}
	],
	files: [
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/bag-info.txt',
			fileName: 'bag-info.txt',
			extension: 'TXT',
			content:
				'Bag-Software-Agent: bagit.py v1.8.1 <https://github.com/LibraryOfCongress/bagit-python>\nBagging-Date: 2024-10-09\nEpoch-Day: 1728432000\nEpoch-Hour: 1728432000\nEpoch-Month: 1727740800\nEpoch-Week: 1728259200\nEpoch-Year: 1704067200\nFact-Datum-Identifier: fb36c760-7393-4181-957f-e2037e5276ff\nFact-Datum-URN: urn:orcfax:fb36c760-7393-4181-957f-e2037e5276ff\nFact-Datum-Value: 1.0512329079\nFact-Description: The price of 1 SHEN at 2024-10-09T00:00:13Z is 1.0512329079 ADA\nFact-Validation-Date: 2024-10-09T00:00:13Z\nFeed-ID: CER/SHEN-ADA/3\nFeed-Name: SHEN-ADA\nFeed-Type: currentExchangeRate\nPackage-Version: 3\nPackaging-Agent: api.arkly.io/2024.6.12.2\nPayload-Oxum: 14513.10\nSource-Organization: Orcfax\nSystem-Identifier: urn:orcfax:system:f0122760-64f8-445d-bd28-9c93a6391f89\nSystem-Name: Orcfax Node\nSystem-Version: Orcfax Node (1.0.0)\nUnix-Time: 1728432013\n'
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/bagit.txt',
			fileName: 'bagit.txt',
			extension: 'TXT',
			content: 'BagIt-Version: 0.97\nTag-File-Character-Encoding: UTF-8\n'
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/fact-statement-SHEN-ADA-2024-10-09T00-00-13Z.json',
			fileName: 'fact-statement-SHEN-ADA-2024-10-09T00-00-13Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Claim',
				description: 'SHEN price in ADA',
				identifier: 'urn:orcfax:2091e4fa-3a00-4dff-95e9-31fa40fafcca',
				dateCreated: '2024-10-09T00:00:13Z',
				text: 'The price of 1 SHEN at 2024-10-09T00:00:13Z is 1.0512329079 ADA',
				about: {
					'@type': 'ExchangeRateSpecification',
					currency: 'SHEN',
					currentExchangeRate: {
						'@type': 'UnitPriceSpecification',
						price: 1.0512329079,
						priceCurrency: 'ADA'
					}
				},
				claimInterpreter: {
					'@type': 'Organization',
					name: 'Orcfax',
					url: 'https://orcfax.io/'
				},
				appearance: [
					'message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json',
					'message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json',
					'message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json',
					'message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json',
					'message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json',
					'message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json'
				],
				isBasedOn: {
					'@type': 'CreativeWork',
					name: 'validation-SHEN-ADA-2024-10-09T00-00-13Z.json',
					creator: 'Orcfax Validator Node: 1.0.0',
					identifier: 'urn:orcfax:251005a2-8d51-461d-a02c-e9d0efd76d66',
					license: 'https://creativecommons.org/licenses/by/4.0/'
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/fact-statement-datum-SHEN-ADA-2024-10-09T00-00-13Z.json',
			fileName: 'fact-statement-datum-SHEN-ADA-2024-10-09T00-00-13Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'CER/SHEN-ADA/3',
				identifier: 'urn:orcfax:fb36c760-7393-4181-957f-e2037e5276ff',
				publisher: {
					'@type': 'Organization',
					name: 'Orcfax',
					url: 'https://orcfax.io/'
				},
				dateCreated: '2024-10-09T00:00:13Z',
				messageAttachment: {
					encoding: 'application/json:base64',
					text: 'ewogICJmZWVkX2lkIjogIkNFUi9TSEVOLUFEQS8zIiwKICAiY3JlYXRlZF9hdCI6IDE3Mjg0MzIwMTM3NjUsCiAgImJvZHkiOiB7CiAgICAibnVtZXJhdG9yIjogMTA1MTIzMjkwNzksCiAgICAiZGVub21pbmF0b3IiOiAxMDAwMDAwMDAwMAogIH0KfQ=='
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:minswap:addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxzv3ypnc5g2ndrjke3lhpad6krx2r9d2ghrlguw9mv4453vqgekewd',
				recipient: 'MinSwap-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:ffaac104-9f58-4d18-8a33-8155ec64eca3',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'MinSwap',
						collector: 'cnt-collector-node/1.0.0',
						address:
							'addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxzv3ypnc5g2ndrjke3lhpad6krx2r9d2ghrlguw9mv4453vqgekewd',
						feed: 'SHEN-ADA',
						utxo: '7a5a6b34f368c541c7915e97afc9df27eae814dbac0463db045e442f511859f6#0',
						token1_volume: 56274.289909,
						token2_volume: 59362.88477,
						price: 1.0548846527605147,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 56274289909,
							lovelace: 59362884770
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:minswapv2:addr1z84q0denmyep98ph3tmzwsmw0j7zau9ljmsqx6a4rvaau6u3ypnc5g2ndrjke3lhpad6krx2r9d2ghrlguw9mv4453vqepnsnd',
				recipient: 'MinSwapV2-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:a17628e8-2bf9-4f2d-9827-c3f36ceb795d',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'MinSwapV2',
						collector: 'cnt-collector-node/1.0.0',
						address:
							'addr1z84q0denmyep98ph3tmzwsmw0j7zau9ljmsqx6a4rvaau6u3ypnc5g2ndrjke3lhpad6krx2r9d2ghrlguw9mv4453vqepnsnd',
						feed: 'SHEN-ADA',
						utxo: '58b029e89cff003376bf9e2884f61a8b080273b0bfeed67b706b949a0d9928f4#2',
						token1_volume: 666309.065942,
						token2_volume: 702585.408292,
						price: 1.054443717194083,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 666309065942,
							lovelace: 702585408292
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:spectrum:addr1x8nz307k3sr60gu0e47cmajssy4fmld7u493a4xztjrll0aj764lvrxdayh2ux30fl0ktuh27csgmpevdu89jlxppvrswgxsta',
				recipient: 'Spectrum-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:be8d3a6f-58fb-4cb8-bc59-a4a00b72435e',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'Spectrum',
						collector: 'cnt-collector-node/1.0.0',
						address:
							'addr1x8nz307k3sr60gu0e47cmajssy4fmld7u493a4xztjrll0aj764lvrxdayh2ux30fl0ktuh27csgmpevdu89jlxppvrswgxsta',
						feed: 'SHEN-ADA',
						utxo: 'c22a38cd8faa586765a03518a39a5301ff531fcd34766d05385300ffec1e9026#0',
						token1_volume: 197528.94562,
						token2_volume: 208265.28593,
						price: 1.054353250741561,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 197528945620,
							lovelace: 208265285930
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:sundaeswap:addr1w9qzpelu9hn45pefc0xr4ac4kdxeswq7pndul2vuj59u8tqaxdznu',
				recipient: 'SundaeSwap-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:1226f9f0-9580-4793-a99b-78e5220323f6',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'SundaeSwap',
						collector: 'cnt-collector-node/1.0.0',
						address: 'addr1w9qzpelu9hn45pefc0xr4ac4kdxeswq7pndul2vuj59u8tqaxdznu',
						feed: 'SHEN-ADA',
						utxo: '0dc6fb96d8d2ae84749495e09f2681d9c5e984ec6b30763c708bfae3fed6c72c#0',
						token1_volume: 846.718409,
						token2_volume: 889.444048,
						price: 1.0504602693715615,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 846718409,
							lovelace: 889444048
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:sundaeswapv3:addr1x8srqftqemf0mjlukfszd97ljuxdp44r372txfcr75wrz26rnxqnmtv3hdu2t6chcfhl2zzjh36a87nmd6dwsu3jenqsslnz7e',
				recipient: 'SundaeSwapV3-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:e120e9ec-fb51-478b-95a4-ab92b803287d',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'SundaeSwapV3',
						collector: 'cnt-collector-node/1.0.0',
						address:
							'addr1x8srqftqemf0mjlukfszd97ljuxdp44r372txfcr75wrz26rnxqnmtv3hdu2t6chcfhl2zzjh36a87nmd6dwsu3jenqsslnz7e',
						feed: 'SHEN-ADA',
						utxo: 'ea1ebd04200e9c62a0283f5371f989af973b3ccc7a5fea35637c5bd777b14ab4#0',
						token1_volume: 69.674327,
						token2_volume: 80.68922,
						price: 1.1580911287453124,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 69674327,
							lovelace: 80689220
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json',
			fileName: 'message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'Message',
				name: 'SHEN-ADA',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'Exchange data',
					additionalType: 'Decentralized Exchange Data',
					description:
						'the on-chain liquidity pool data from a decentralized exchange (DEX) as read by an Orcfax collector-node'
				},
				sender:
					'urn:cardano:address:wingriders:addr1z8nvjzjeydcn4atcd93aac8allvrpjn7pjr2qsweukpnayd8awyllkdhpwm7r3tnvvm0mzx592fzgazhuevl679cf7lq35qw53',
				recipient: 'WingRiders-cnt-collector-node/1.0.0',
				identifier: 'urn:orcfax:930ace71-4d4d-440b-ab81-e0991c1f980a',
				dateReceived: '2024-10-08T23:59:08Z',
				messageAttachment: {
					encoding: 'application/json;base64',
					text: {
						token1_name: '5368656e4d6963726f555344',
						token1_decimals: 6,
						token2_name: 'lovelace',
						token2_decimals: 6,
						block_height: 136865651,
						source: 'WingRiders',
						collector: 'cnt-collector-node/1.0.0',
						address:
							'addr1z8nvjzjeydcn4atcd93aac8allvrpjn7pjr2qsweukpnayd8awyllkdhpwm7r3tnvvm0mzx592fzgazhuevl679cf7lq35qw53',
						feed: 'SHEN-ADA',
						utxo: '3f76c0af448fc654178dd513f26ac4e9de30963b11b8e5b0237b1c5f046e3e33#0',
						token1_volume: 919882.959524,
						token2_volume: 964043.198723,
						price: 1.0480063672685611,
						amounts: {
							'8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344': 919882959524,
							lovelace: 964043198723
						}
					}
				}
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/validation-SHEN-ADA-2024-10-09T00-00-13Z.json',
			fileName: 'validation-SHEN-ADA-2024-10-09T00-00-13Z.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				type: 'MediaObject',
				identifier: 'urn:orcfax:251005a2-8d51-461d-a02c-e9d0efd76d66',
				isBasedOn: {
					'@type': 'MediaObject',
					name: 'the raw information sent to an Orcfax validator by an Orcfax node',
					identifier: 'urn:orcfax:node:3ce0f823-1df0-4f3a-a4de-2ffbdb7c881d'
				},
				contributor: {
					'@type': 'Organization',
					name: 'AS14061 DigitalOcean, LLC',
					locationCreated: {
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Sydney',
							addressRegion: 'New South Wales, AU,',
							geo: '-33.9092,151.1940'
						}
					}
				},
				additionalType: [
					{
						'@type': 'Event',
						description: 'successful content signature generation for Orcfax node data',
						startDate: '2024-10-09T00:00:13Z',
						recordedIn: {
							'@type': 'CreativeWork',
							description: {
								'@type': 'TextObject',
								comment:
									"an Orcfax content signature is a sha256 digest of a node's 'collected timestamp', 'data-points' in-order and the 'node identifier' (uuid)",
								sha256: 'abe4f264627e902c264e1325f6f04b1155b5143d2de3f95451e7507f467ace6b'
							},
							hasPart: [
								{
									'@type': 'CreativeWork',
									description: 'collecting timestamp',
									text: '2024-10-08T23:59:08Z'
								},
								{
									'@type': 'CreativeWork',
									description: 'data points for SHEN-ADA',
									text: [
										'[56274.289909, 666309.065942, 69.674327, 919882.959524, 846.718409, 197528.94562]',
										'[59362.88477, 702585.408292, 80.68922, 964043.198723, 889.444048, 208265.28593]'
									]
								},
								{
									'@type': 'CreativeWork',
									description: 'node identifier (uuid)',
									text: '3ce0f823-1df0-4f3a-a4de-2ffbdb7c881d'
								}
							]
						}
					},
					{
						'@type': 'Event',
						description:
							'average price is determined by dividing total volume of ADA by total volume of SHEN',
						startDate: '2024-10-09T00:00:13Z',
						about: {
							'@type': 'Observation',
							measurementMethod: [
								'volume/liquidity average sum(valueReference[1]) (ADA) divided by sum(valueReference[0]) (SHEN)'
							],
							value: 1.0512329079,
							valueReference: [
								'[56274.289909, 666309.065942, 69.674327, 919882.959524, 846.718409, 197528.94562]',
								'[59362.88477, 702585.408292, 80.68922, 964043.198723, 889.444048, 208265.28593]'
							]
						}
					}
				]
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/data/version-orcfax-price-feed-schema-v3.json',
			fileName: 'version-orcfax-price-feed-schema-v3.json',
			extension: 'JSON',
			content: {
				'@context': 'https://schema.org',
				'@type': 'CreativeWork',
				description: {
					'@type': 'TextObject',
					text: 'Orcfax schema version',
					additionalType: 'currentExchangeRate',
					isBasedOn: {
						'@type': 'SoftwareApplication',
						applicationCategory: 'oracle',
						applicationSubcategory: 'validator',
						softwareName: 'Orcfax Node',
						softwareVersion: 'Orcfax Node (1.0.0)',
						producer: {
							'@type': 'Organization',
							name: 'Orcfax',
							url: 'https://orcfax.io/'
						}
					}
				},
				version: 3
			}
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/manifest-sha256.txt',
			fileName: 'manifest-sha256.txt',
			extension: 'TXT',
			content:
				'9316ff7ba8d488638211b70f56e009bbc2f2b9c62d21dce7c974836ea95296b4  data/fact-statement-SHEN-ADA-2024-10-09T00-00-13Z.json\n70e709431ce1bad7305483db9d05247e83043390f8a87c2b87453ee843a2e863  data/fact-statement-datum-SHEN-ADA-2024-10-09T00-00-13Z.json\n490a74816a7b89397d56129415de9913b9cbaa995d8cc7b8c7bad050ddae42d7  data/message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json\n1e899101684ce7b22982b92aa695e0a2fe575e0f067e7fd5e5bc261e83489eae  data/message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json\nab65f7f36b4125d59aca2e3d36ac11496a2784a3dee40ef44b64ac66bbb39e99  data/message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json\n7d8dad5a8f889bdadf0ccc943a677ed4f7e5fb4398e629274827a068a525d670  data/message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json\n420b764a88014bba7861df85a79dc537c2b28e8bb0fd0a2b311a0421e914245e  data/message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json\n304055be711573e215687e3ce4c38d8950a6f776bf47674c409dc7fef3e1ffdd  data/message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json\n5414681d421ee154e819d2e181dc1e60f4a35e8bfd1d51eac4c242a7f0f8c77b  data/validation-SHEN-ADA-2024-10-09T00-00-13Z.json\nb99626b42f4399b1f39ddb86186c5872773731943e6971701e7b455607ef34be  data/version-orcfax-price-feed-schema-v3.json\n'
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/manifest-sha512.txt',
			fileName: 'manifest-sha512.txt',
			extension: 'TXT',
			content:
				'1da27a7ec04934ef21b19e976236512f0e5307ad7490e5f149c507f4bff6c013444247c2bb4ef5551eb4603a6af5fd32b408f456026b68b8100afbe2dfc188dd  data/fact-statement-SHEN-ADA-2024-10-09T00-00-13Z.json\n319d2ad70dea53db4a8f5dcf01dd179f9ad55941a20ce9e75fc7b3c183bce956ba5eebbfcf4d36bedacf545685bb782fe7cc6ec60da1e1d160c329df295a441b  data/fact-statement-datum-SHEN-ADA-2024-10-09T00-00-13Z.json\n1dbe4053019f3724dd0d1e46a1377986431c0e411824a637962e7a99441fb830722c0bcc6e9bdf7bf00f8845a9ae336961de797b415825d0017f8555202f3158  data/message-SHEN-ADA-MinSwap-2024-10-08T23-59-08Z.json\nb401b3d4e3962992b60e4249fb85433b71a68c123435cafe4490be1813704b6b21b801d55a89300d6fda0cdb9c7f9b86ae840204d9369282c615d7e9d5c55687  data/message-SHEN-ADA-MinSwapV2-2024-10-08T23-59-08Z.json\nb4724e235ef79f916431c810edc8a91f9ac61b4bccef910499d8afd48f11d897b145d5e36e9d7de44f6066d72635e29af904892785e43cf2bdddcd33e76a3dd7  data/message-SHEN-ADA-Spectrum-2024-10-08T23-59-08Z.json\n84a98fa40185b6564052bbc5512323e32c9b3705e5c6b6842dfc647111f19fb3706aa9ecca5828f0ba09c05f6fb555c200a69dd1d07839a1f7f081193bd97c39  data/message-SHEN-ADA-SundaeSwap-2024-10-08T23-59-08Z.json\nb006650b0e82e200c20787e3ebee2d465f42c95b405de460f0d167e9cecd26d310c0668b0e489eb2756ad8ea08480cae989f6230a39587abdd1e233559d4e3b2  data/message-SHEN-ADA-SundaeSwapV3-2024-10-08T23-59-08Z.json\n6d92e62b43c5e4302220c2df2bd31dc272ca600c09db34b642ba169b11ada27c9af086dfb05bad29d82afe1ce17f84f8f27d3dab52993798997349ef4062db17  data/message-SHEN-ADA-WingRiders-2024-10-08T23-59-08Z.json\n6215ce0cae2a71f95baed7a3d0e30e0e07a980acc5cd0f388f624173c8d019a44a575e78446596826d6f600da622489180e97fa328c3cd93d57fcd8bbb0600cc  data/validation-SHEN-ADA-2024-10-09T00-00-13Z.json\nd093a64b760f47cf10488cd2d15df838e4b0b263bf6b5f866987f4b5646584008c18f372a9c3d1cb64ef5c14fbc525c5d2a3bb6e50e205737880d4b98df2ed12  data/version-orcfax-price-feed-schema-v3.json\n'
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/tagmanifest-sha256.txt',
			fileName: 'tagmanifest-sha256.txt',
			extension: 'TXT',
			content:
				'e00f843726dc8177e2db042e3f01d68e3961119cf0b8abfff835bddf8d8cefca bag-info.txt\n9e73fe4b8723464defc9298bb1501cb11d54abe6d6a8fa6d9cc4736257ebbd9b manifest-sha512.txt\ne91f941be5973ff71f1dccbdd1a32d598881893a7f21be516aca743da38b1689 bagit.txt\ne34982c3119c037104d7b338437e688ae95b4ca0ce74dd686b40655d8410c644 manifest-sha256.txt\n'
		},
		{
			name: 'fact-SHEN-ADA-2024-10-08T23-59-08Z/tagmanifest-sha512.txt',
			fileName: 'tagmanifest-sha512.txt',
			extension: 'TXT',
			content:
				'6f60aacf32bfca31cdf86647c6b6c08c2ac2fabcdf4f919ae042ffbb92d64d85812ed7514b7405e33a413f184cd9efad44188e504ff40f52b2fe172a000a3144 bag-info.txt\n89fd58cdef51a4765d79ed36cfac80849532542219a2f8f4b75648ed176a92f3a4e4866dab2d6258c0d281e86286a79ef8a373a0f294b865854c75840adee3a9 manifest-sha512.txt\n418dcfbe17d5f4b454b18630be795462cf7da4ceb6313afa49451aa2568e41f7ca3d34cf0280c7d056dc5681a70c37586aa1755620520b9198eede905ba2d0f6 bagit.txt\n6b33f0575763ddb1c4ffabb93e42c52a46b5aa8e54312204d7c3378d47aae4c9508043b33b63db9ecfaebb1cbc6a73b6e8eb7e2776cde7d182307d102d782a71 manifest-sha256.txt\n'
		}
	],
	details: {
		sources: [
			{
				id: 'y65r3twq6wumk1t',
				name: 'MinSwap',
				description: '',
				type: 'DEX LP',
				website: 'https://minswap.org',
				image_path: '/sources/minswap.webp',
				background_color: '#8AAAFF',
				baseAssetValue: 56274.289909,
				quoteAssetValue: 59362.88477
			},
			{
				id: '9axkf7hlfthxu3p',
				name: 'MinSwapV2',
				description: '',
				type: 'DEX LP',
				website: 'https://minswap.org',
				image_path: '/sources/minswap.webp',
				background_color: '#8AAAFF',
				baseAssetValue: 666309.065942,
				quoteAssetValue: 702585.408292
			},
			{
				id: 'ar6uv7f7goinraf',
				name: 'Spectrum',
				description: '',
				type: 'DEX LP',
				website: 'https://spectrum.fi',
				image_path: '/sources/spectrum.png',
				background_color: '#FFFFFF',
				baseAssetValue: 69.674327,
				quoteAssetValue: 80.68922
			},
			{
				id: 'df0vgmi3xughnyp',
				name: 'SundaeSwap',
				description: '',
				type: 'DEX LP',
				website: 'https://sundae.fi/products/sundaeswap',
				image_path: '/sources/sundaeswap.jpg',
				background_color: '#F6C9AA',
				baseAssetValue: 919882.959524,
				quoteAssetValue: 964043.198723
			},
			{
				id: '97ghqfo7eqp5p4w',
				name: 'SundaeSwapV3',
				description: '',
				type: 'DEX LP',
				website: 'https://sundae.fi/products/sundaeswap',
				image_path: '/sources/sundaeswap.jpg',
				background_color: '#F6C9AA',
				baseAssetValue: 846.718409,
				quoteAssetValue: 889.444048
			},
			{
				id: 's9p940tcsazn8v8',
				name: 'WingRiders',
				description: '',
				type: 'DEX LP',
				website: 'https://www.wingriders.com',
				image_path: '/sources/wingriders.png',
				background_color: '#00A064',
				baseAssetValue: 197528.94562,
				quoteAssetValue: 208265.28593
			}
		],
		collectionTimestamp: '2024-10-08T23:59:08Z',
		collectorNodeID: 'urn:orcfax:node:3ce0f823-1df0-4f3a-a4de-2ffbdb7c881d',
		contentSignature: 'abe4f264627e902c264e1325f6f04b1155b5143d2de3f95451e7507f467ace6b',
		calculationMethod:
			'average price is determined by dividing total volume of ADA by total volume of SHEN',
		validationDate: '2024-10-09T00:00:13Z',
		sourceType: 'DEX'
	}
};
