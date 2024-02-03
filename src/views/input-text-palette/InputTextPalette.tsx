import { useState } from 'react';
import { InputText } from 'src/index';

export default function InputTextPalette(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');

    const changeHandler = (value: string): void => {
        console.log('value', value);
        setValueInput(value);
    };
    return (
        <div>
            <InputText
                label="Name"
                value={valueInput}
                handleChange={changeHandler}
            />
        </div>
    );
}
