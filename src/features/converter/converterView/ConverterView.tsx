import { equal } from '../../assets';
import { Input } from '../../reusable';
import { CURRENNCY_OPTION } from '../../types';

interface ConverterViewProps {
    inputFrom: string;
    inputTo: string;
    mockInputFrom: number;
    isActiveFrom: boolean;
    inputValueFrom: number;
    inputValueTo: number;
    onChangeInputValue: (e: React.FormEvent<HTMLInputElement>) => void;
    onChangeInputValue2: (e: React.FormEvent<HTMLInputElement>) => void;
    onChangeCurrency: (e: React.FormEvent<HTMLSelectElement>) => void;
    onChangeCurrency2: (e: React.FormEvent<HTMLSelectElement>) => void;
}
const ConverterView = ({
    inputFrom,
    inputTo,
    mockInputFrom,
    isActiveFrom,
    inputValueFrom,
    inputValueTo,
    onChangeInputValue,
    onChangeInputValue2,
    onChangeCurrency,
    onChangeCurrency2,
}: ConverterViewProps) => {
    return (
        <div className="px-3 w-full md:w-1/2 h-screen  m-auto flex items-center">
            <div className="w-full p-6 rounded-xl border flex-row md:flex justify-between items-center">
                <Input
                    selectedCurrency={inputFrom}
                    currencyOption={CURRENNCY_OPTION}
                    inputValue={isActiveFrom ? mockInputFrom : inputValueFrom}
                    onChangeInputValue={onChangeInputValue}
                    onChangeCurrency={onChangeCurrency}
                />
                <img src={equal} alt="equal" className="w-12 h-12 m-auto" />
                <Input
                    selectedCurrency={inputTo}
                    currencyOption={CURRENNCY_OPTION}
                    inputValue={inputValueTo}
                    onChangeInputValue={onChangeInputValue2}
                    onChangeCurrency={onChangeCurrency2}
                />
            </div>
        </div>
    );
};

export default ConverterView;
