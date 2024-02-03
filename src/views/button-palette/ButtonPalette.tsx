import { Button } from 'src/index';

export default function ButtonPalette(): JSX.Element {
    return (
        <div>
            <Button label="Submit" clickHandler={() => console.log('submit')} />
        </div>
    );
}
