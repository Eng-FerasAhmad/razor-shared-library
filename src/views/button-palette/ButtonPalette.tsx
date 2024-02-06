import { useState } from 'react';
import { IoAddOutline, IoArrowBackSharp } from 'react-icons/io5';
import { ButtonLGContainer, ButtonPaletteContainer } from './style';
import { Button } from 'src/index';

export default function ButtonPalette(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <ButtonPaletteContainer data-testid="button-palette">
            <ButtonLGContainer>
                <Button
                    color="primary"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="error"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="success"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="warning"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="info"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="note"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
            </ButtonLGContainer>
            <ButtonLGContainer>
                <Button
                    color="primary"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="error"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="success"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="warning"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="info"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="note"
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
            </ButtonLGContainer>
            <ButtonLGContainer>
                <Button
                    color="primary"
                    disabled={true}
                    variant="outline"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="error"
                    disabled={true}
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="success"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                    endIcon={<IoAddOutline size={24} />}
                />
                <Button
                    color="info"
                    label={`Clicked ${count}`}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                    startIcon={<IoArrowBackSharp size={20} />}
                />
            </ButtonLGContainer>
        </ButtonPaletteContainer>
    );
}
