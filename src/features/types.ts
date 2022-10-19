export const CURRENNCY_OPTION = ['USD', 'UAH', 'EUR'] as const;

export type CurrencyCodeType = typeof CURRENNCY_OPTION[number];
