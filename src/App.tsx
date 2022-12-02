import React, { useEffect, useState } from 'react';

import { fetchConvert, fetchCurrency } from './features/api/api';
import { dollar, euro, europe, ukraine, usa } from './features/assets';
import { BASE_CURRENCY, DOLLAR, EURO, HRYVNIA } from './features/constants';
import { ConverterContainer } from './features/converter';
import { Header } from './features/header';

export interface CurrencyObjectProps {
    code: string;
    icon: string;
    rate: number;
}

function App() {
    const [currencies, setCurrencies] = useState();
    const [dollarCur, setDollarCur] = useState(1);
    const [euroCur, setEuroCur] = useState(1);

    useEffect(() => {
        fetchCurrency(BASE_CURRENCY).then((data) => {
            const response = data.rates;
            setCurrencies(response);
        });
        fetchConvert(DOLLAR, HRYVNIA).then((data) => setDollarCur(data.result));
        fetchConvert(EURO, HRYVNIA).then((data) => setEuroCur(data.result));
    }, []);

    if (!currencies) return null;

    const HEADER_TAGS = [
        { icon: euro, count: euroCur },
        { icon: dollar, count: dollarCur },
    ];

    const CURRENCIES = [
        {
            icon: ukraine,
            rate: currencies[HRYVNIA],
            name: HRYVNIA,
        },
        {
            icon: europe,
            rate: currencies[EURO],
            name: EURO,
        },
        {
            icon: usa,
            rate: currencies[DOLLAR],
            name: DOLLAR,
        },
    ];

    return (
        <>
            <Header tags={HEADER_TAGS} />
            <ConverterContainer currencies={CURRENCIES} />
        </>
    );
}

export default App;
