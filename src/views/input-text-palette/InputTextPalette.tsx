import { ChangeEvent, useState } from 'react';
import { InputText } from 'src/index';

export default function InputTextPalette(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');

    const changeHandler = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
        setValueInput(e.target.value);
    };

    return (
        <div data-testid="input-text-palette">
            <InputText
                label="Name"
                value={valueInput}
                onChange={(e) => changeHandler(e)}
            />
        </div>
    );
}
