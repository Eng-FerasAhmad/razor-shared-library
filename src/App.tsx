import ColorPalette from 'src/ColorPalette';
import { Button } from 'src/components/form/button/Button';
import { InputText } from 'src/components/form/input-text/InputText';

export default function App(): JSX.Element {
    const clickHandler = (): void => {
        console.log('clicked')
    }

    const changeHandler = (value: string | undefined): void => {
        console.log('value', value)
    }

    return (
        <div>
            <Button clickHandler={clickHandler} label='Button' style={{ marginBottom: 20 }} size='lg' color='warning' />
            
            <div style={{ width: 250, height: 50 }}>
                <InputText label='Name' value='' handleChange={changeHandler} />
            </div>
            <ColorPalette />
        </div>
    );
}
