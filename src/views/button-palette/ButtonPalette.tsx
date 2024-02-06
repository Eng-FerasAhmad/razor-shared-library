import { useState } from 'react';
import { Button } from 'src/index';

export default function ButtonPalette(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    return (
        <div data-testid="button-palette">
            <Button label={`Clicked ${count}`} clickHandler={() => setCount(count + 1)} data-testid="default-button"/>
        </div>
    );
}
