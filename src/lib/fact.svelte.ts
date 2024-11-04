import { z } from 'zod';
import { formatDistanceStrict } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';
import { camelToTitleCase, formatCurrencyValue } from '$lib/utils';

export class FactStatementData {
	fact_urn: string;
	feed_name: string;
	feed_type: string;
	value: number;
	description: string;
	validation_date: Date;
	inverse_value: number;
	formatted_value: string;
	formatted_inverse_value: string;
	inverse_description: string;
	formatted_validation_date: string;
	formatted_validation_time: string;

	constructor(fact: FactStatement) {
		this.fact_urn = fact.fact_urn;
		this.feed_name = fact.feed_name;
		this.feed_type = fact.feed_type;
		this.value = fact.value;
		this.description = fact.description;
		this.validation_date = fact.validation_date;
		this.inverse_value = fact.inverse_value;
		this.formatted_value = fact.formatted_value;
		this.formatted_inverse_value = fact.formatted_inverse_value;
		this.inverse_description = fact.inverse_description;
		this.formatted_validation_date = fact.formatted_validation_date;
		this.formatted_validation_time = fact.formatted_validation_time;
	}

	static getTimeSinceValidation(validationDate: Date) {
		let currentTime = $state(new Date());
		const time_since_validated = $derived(
			formatDistanceStrict(validationDate, currentTime, {
				addSuffix: true
			})
		);

		// Update the current time every second
		$effect(() => {
			const timer = setInterval(() => {
				currentTime = new Date();
			}, 1000);

			return () => clearInterval(timer);
		});

		return time_since_validated;
	}
}

export const FactStatementSchema = z
	.object({
		fact_urn: z.string(),
		feed_name: z.string(),
		feed_type: z.string().transform((value) => camelToTitleCase(value)),
		value: z.number(),
		description: z.string(),
		validation_date: z.coerce.date()
	})
	// Append computed properties
	.transform((fact) => {
		const inverse_value = +(1 / fact.value);
		const formatted_value = formatCurrencyValue(fact.value);
		const formatted_inverse_value = formatCurrencyValue(inverse_value);
		const [baseAssetTicker, quoteAssetTicker] = fact.feed_name.split('-');
		const description = `1 ${baseAssetTicker} was ${formatted_value} ${quoteAssetTicker}`;
		const inverse_description = `1 ${quoteAssetTicker} was ${formatted_inverse_value} ${baseAssetTicker}`;
		const formatted_validation_date = format(
			toZonedTime(fact.validation_date, 'UTC'),
			'MMM do yyyy',
			{
				timeZone: 'UTC'
			}
		);
		const formatted_validation_time = format(
			toZonedTime(fact.validation_date, 'UTC'),
			'HH:mm:ss zzz',
			{
				timeZone: 'UTC'
			}
		);

		return {
			...fact,
			inverse_value,
			formatted_value,
			formatted_inverse_value,
			description,
			inverse_description,
			formatted_validation_date,
			formatted_validation_time
		};
	});
export type FactStatement = z.infer<typeof FactStatementSchema>;
