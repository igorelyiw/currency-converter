import React from 'react';
import { CurrencyCodeType } from '../types';

interface InputProps {
    selectedCurrency: string;
    inputValue: number;
    readonly currencyOption: readonly CurrencyCodeType[];
    onChangeInputValue: (e: React.FormEvent<HTMLInputElement>) => void;
    onChangeCurrency: (e: React.FormEvent<HTMLSelectElement>) => void;
}

const Input = ({ currencyOption, selectedCurrency, inputValue, onChangeInputValue, onChangeCurrency }: InputProps) => {
    const inputStyle =
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    return (
        <div className="flex flex-col gap-4">
            <input type="number" className={inputStyle} value={inputValue.toFixed(2)} onChange={onChangeInputValue} min="0" />
            <select value={selectedCurrency} className={inputStyle} onChange={onChangeCurrency}>
                {currencyOption.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Input;
