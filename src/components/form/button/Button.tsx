import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps {
    label: string;
}

export function ButtonCustom({
    label,
    ...props
}: ButtonProps & CustomButtonProps): JSX.Element {
    return (
        <Button
            {...props}
            sx={{ textTransform: 'capitalize', fontFamily: 'inherit' }}
        >
            {label}
        </Button>
    );
}
