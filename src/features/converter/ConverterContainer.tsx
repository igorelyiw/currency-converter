import React, { useEffect } from 'react';
import { useState } from 'react';

import { fetchConvert } from '../api/api';
import { DOLLAR, HRYVNIA } from '../constants';
import { CurrencyCodeType } from '../types';

import { ConverterView } from './converterView';

export interface CurrencieProps {
    icon: string;
    rate: number;
    name: string;
}
interface ConverterContainerProps {
    readonly currencies: readonly CurrencieProps[];
}

const ConverterContainer = ({ currencies }: ConverterContainerProps) => {
    const [inputFrom, setInputFrom] = useState(DOLLAR);
    const [inputTo, setInputTo] = useState(HRYVNIA);
    const [mockInputFrom, setMockInputFrom] = useState(0);
    const [isActiveFrom, setIsActiveFrom] = useState(false);
    const [inputValueFrom, setInputValueFrom] = useState(1000);
    const [inputValueTo, setInputValueTo] = useState(0);
    const onChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
        setIsActiveFrom(false);
        setInputValueFrom(Number(e.currentTarget.value));
    };
                    const x = '';
                    console.log();
                    const obj = {
                        a: 1,
                        b: 2,
                    };
            useEffect(() => {
                const { rate } = currencies.filter((item) => item.name === inputTo)[0];
                setInputValueTo(inputValueFrom * rate);
                fetchConvert(inputFrom, inputTo).then((data) => setInputValueTo(data.result * inputValueFrom));
            }, [inputValueFrom, inputFrom, inputTo, currencies]);

    useEffect(() => {
        const { rate } = currencies.filter((item) => item.name === inputTo)[0];
        setInputValueTo(inputValueFrom * rate);
    }, []);

    const onChangeInputValue2 = (e: React.FormEvent<HTMLInputElement>) => {
        setIsActiveFrom(true);
        const { rate } = currencies.filter((item) => item.name === inputTo)[0];
        setInputValueTo(Number(e.currentTarget.value));
        setMockInputFrom(Number(e.currentTarget.value) / rate);
    };

    const onChangeCurrency = (e: React.FormEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value !== inputTo) setInputFrom(e.currentTarget.value as unknown as CurrencyCodeType);
    };

    const onChangeCurrency2 = (e: React.FormEvent<HTMLSelectElement>) => {
        if (e.currentTarget.value !== inputFrom) setInputTo(e.currentTarget.value as unknown as CurrencyCodeType);
    };
    return (
        <div>
            <ConverterView
                inputFrom={inputFrom}
                inputTo={inputTo}
                mockInputFrom={mockInputFrom}
                isActiveFrom={isActiveFrom}
                inputValueFrom={inputValueFrom}
                inputValueTo={inputValueTo}
                onChangeInputValue={onChangeInputValue}
                onChangeInputValue2={onChangeInputValue2}
                onChangeCurrency={onChangeCurrency}
                onChangeCurrency2={onChangeCurrency2}
            />
        </div>
    );
};

export default ConverterContainer;
