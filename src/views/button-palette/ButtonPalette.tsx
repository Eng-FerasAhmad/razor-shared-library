import { useState } from 'react';
import { IoAddOutline, IoArrowBackSharp } from 'react-icons/io5';
import { ButtonLGContainer, ButtonPaletteContainer } from './style';
import { Button, ButtonProps } from 'src/index';

const buttonColors: Pick<ButtonProps, 'color'>[] = [
    { color: 'primary' },
    { color: 'error' },
    { color: 'success' },
    { color: 'info' },
    { color: 'warning' },
    { color: 'note' },
];

const buttonVariants: Pick<ButtonProps, 'color' | 'variant'>[] = [
    { color: 'primary', variant: 'outline' },
    { color: 'error', variant: 'outline' },
    { color: 'success', variant: 'outline' },
    { color: 'info', variant: 'outline' },
    { color: 'warning', variant: 'outline' },
    { color: 'note', variant: 'outline' },
];

export default function ButtonPalette(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const [submit, setSubmit] = useState<string>('');
    const [icon, setIcon] = useState<string>('');
    const [iconBack, setIconBack] = useState<string>('');

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
                            label={submit || 'Click'}
                            clickHandler={() => setSubmit('Submit')}
                            variant={item.variant}
                            size="lg"
                        />
                    );
                })}
            </ButtonLGContainer>

            <ButtonLGContainer>
                <Button
                    color="error"
                    disabled={true}
                    label={'disabled'}
                    clickHandler={() => setCount(count + 1)}
                    data-testid="default-button"
                    size="lg"
                />
                <Button
                    color="success"
                    label={icon || 'Icon'}
                    clickHandler={() => setIcon('Icon Button')}
                    data-testid="default-button"
                    size="lg"
                    endIcon={<IoAddOutline size={24} />}
                />
                <Button
                    color="info"
                    label={iconBack || 'Back'}
                    clickHandler={() => setIconBack('Button Back')}
                    data-testid="default-button"
                    size="lg"
                    startIcon={<IoArrowBackSharp size={20} />}
                />
            </ButtonLGContainer>
        </ButtonPaletteContainer>
    );
}
