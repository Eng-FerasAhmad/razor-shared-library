import Button, { ButtonProps } from '@mui/material/Button';
import { Template } from 'src/components/_template/Template';
import { ReactElement } from 'react';

interface Props {
    label: string;
    size?: 'large' | 'medium' | 'small';
    variant?: 'text' | 'outlined' | 'contained';
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
}

export function ButtonCustom({
    label,
    size,
    variant,
    color,
    ...props
}: ButtonProps & Props): ReactElement {
    const height = (): number => {
        switch (size) {
            case 'large':
                return 56;
            case 'medium':
                return 40;
            case 'small':
                return 30;
            default:
                return 40;
        }
    };

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
                    height,
                    fontSize,
                    width: '100%',
                }}
            >
                {label}
            </Button>
        </Template>
    );
}
