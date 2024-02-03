import { useState } from 'react';
import { InputText } from 'src/components/form/input-text/InputText';
import ColorPalette from 'src/views/color-palette/ColorPalette';

export default function App(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');

    const changeHandler = (value: string): void => {
        console.log('value', value)
        setValueInput(value); 
        
    }

    return (
        <div>
            <div style={{ width: 250, height: 50 }}>
                <InputText label='Name' value={valueInput} handleChange={changeHandler} />
            </div>
            <ColorPalette />
        </div>
    );
}
