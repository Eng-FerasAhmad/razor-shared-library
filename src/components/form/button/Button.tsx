import Button, { ButtonProps } from '@mui/material/Button';
import { Template } from 'src/components/_template/Template';
import { ReactElement } from 'react';
import { StandardColor, StandardSize, StandardVariant } from 'shared/types';

interface Props {
    label: string;
    size?: StandardSize;
    variant?: StandardVariant;
    color?: StandardColor;
}

export function ButtonCustom({
    label,
    size,
    variant,
    color,
    ...props
}: ButtonProps & Props): ReactElement {
    const fontSize = (): number => {
        switch (size) {
            case 'large':
                return 17;
            case 'medium':
                return 15;
            case 'small':
                return 13;
            default:
                return 15;
        }
    };

    return (
        <Template>
            <Button
                {...props}
                size={size}
                variant={variant}
                color={color}
                sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'inherit',
                    fontSize,
                    width: '100%',
                }}
            >
                {label}
            </Button>
        </Template>
    );
}
