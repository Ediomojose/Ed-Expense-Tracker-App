// utils/numberFormatter.ts

/**
 * Formats a number with commas.
 * @param num The number to format.
 * @returns A string with the number formatted with commas.
 */
export function formatNumberWithCommas(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
  }
  