import { useState } from 'react';
import { IoAddOutline, IoArrowBackSharp } from 'react-icons/io5';
import { Button, ButtonProps } from 'src/index';
import { ButtonLGContainer, ButtonPaletteContainer } from './style';

const buttonColors: Pick<ButtonProps, 'color'>[] = [
    { color: 'primary' },
    { color: 'error' },
    { color: 'success' },
    { color: 'info' },
    { color: 'warning' },
    { color: 'note' }
];

const buttonVariants: Pick<ButtonProps, 'color' | 'variant'>[] = [
    { color: 'primary', variant: 'outline' },
    { color: 'error', variant: 'outline' },
    { color: 'success', variant: 'outline' },
    { color: 'info', variant: 'outline' },
    { color: 'warning', variant: 'outline' },
    { color: 'note', variant: 'outline' }
]

export default function ButtonPalette(): JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <ButtonPaletteContainer data-testid="button-palette">
            <ButtonLGContainer>
                {buttonColors.map((item, idx) => {
                    return (
                        <Button
                            key={idx}
                            color={item.color}
                            label={`Clicked ${count}`}
                            clickHandler={() => setCount(count + 1)}
                            data-testid="default-button"
                            size="lg"
                        />
                    );
                })}
            </ButtonLGContainer>

            <ButtonLGContainer>
                {buttonVariants.map((item, idx) => {
                    return (
                        <Button
                            data-testid="outline-button"
                            key={idx}
                            color={item.color}
                            label={`Clicked ${count}`}
                            clickHandler={() => setCount(count + 1)}
                            variant={item.variant}
                            size="lg"
                        />
                    );
                })}
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
