import { useState } from 'react';
import { InputText } from 'src/index';

export default function InputTextPalette(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');

    const changeHandler = (value: string): void => {
        setValueInput(value);
    };
    return (
        <div data-testid="input-text-palette">
            <InputText
                label="Name"
                value={valueInput}
                handleChange={changeHandler}
            />
        </div>
    );
}
