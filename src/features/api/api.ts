import { BASE_URL } from '../constants';

export const fetchCurrency = (code: string) => fetch(`${BASE_URL}/latest?base=${code}`).then((res) => res.json());

export const fetchConvert = (from: string, to: string) =>
    fetch(`${BASE_URL}/convert?from=${from}&to=${to}`).then((res) => res.json());
