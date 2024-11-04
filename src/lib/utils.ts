import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

interface EllipsisOptions {
	maxLength?: number;
	placement?: 'start' | 'middle' | 'end';
}

export function ellipsis(str: string | number, options?: EllipsisOptions) {
	const maxLength = options?.maxLength || 20;
	const placement = options?.placement || 'end';

	if (typeof str === 'number') str = str.toString();

	if (str.length > maxLength) {
		if (placement === 'start') return '...' + str.slice(-maxLength);
		else if (placement === 'middle') return str.slice(0, 6) + '...' + str.slice(-6);
		else if (placement === 'end') return str.slice(0, maxLength) + '...';
	}
	return str;
}

export function formatCurrencyValue(value: number, useSubscriptNotation = true): string {
	// Convert the number to a string using toFixed to prevent scientific notation, then slice to avoid rounding
	let valueStr = value.toFixed(20); // Using 20 decimal places to capture very small numbers accurately

	// Trim any trailing zeros
	valueStr = valueStr.replace(/\.?0+$/, '');

	// Handle large numbers by adding commas
	if (value >= 10) {
		// Split the string into integer and decimal parts
		let [integerPart, decimalPart] = valueStr.split('.');

		// Format the integer part with commas
		integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		// If there is a decimal part and the number is >= 10, truncate it to 2 decimal places
		if (decimalPart) {
			decimalPart = decimalPart.slice(0, 2); // Slice to ensure no rounding
			return integerPart + '.' + decimalPart;
		}

		// Return the integer part if no decimal part exists
		return integerPart;
	}

	// Handle numbers between 1 and 10, keeping up to 4 decimal places
	if (value >= 1 && value < 10) {
		const decimalIndex = valueStr.indexOf('.');
		if (decimalIndex !== -1) {
			return valueStr.slice(0, decimalIndex + 5); // Slice to ensure no rounding
		}
		return valueStr; // No decimal part, return as is
	}

	// Handle numbers less than 1
	if (value < 1) {
		// If there are more than 2 leading zeros, apply special formatting
		const match = valueStr.match(/^0\.(0+)(\d+)/);
		if (match) {
			const leadingZeros = match[1].length;
			const significantDigits = match[2].slice(0, 4); // Slice to ensure no rounding

			if (leadingZeros > 2 && useSubscriptNotation) {
				// Subscript the number of leading zeros
				return `0.0<sub class="align-middle" style="font-size: 0.7em;">${leadingZeros}</sub>${significantDigits}`;
			} else {
				return `0.${match[1]}${significantDigits}`;
			}
		}

		// Otherwise, keep up to 4 decimal places
		return valueStr.slice(0, valueStr.indexOf('.') + 5); // Slice to ensure no rounding
	}

	// Default case: return the value as a string
	return valueStr;
}

export function formatSumValue(num: number): string {
	return num.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}

export function camelToTitleCase(str: string): string {
	return str
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (char) => char.toUpperCase())
		.trim();
}
