import Button, { ButtonProps } from '@mui/material/Button';
import { Template } from 'src/components/_template/Template';

interface Props {
    label: string;
    size?: "large" | "medium" | "small"
}

export function ButtonCustom({
    label,
    size,
    ...props
}: ButtonProps & Props): JSX.Element {
    const height = (): number => {
        switch (size) {
            case "large":
                return 56;
            case 'medium':
                return 40;
            case "small":
                return 30;
            default:
                return 40;
        }
    }

    const fontSize = (): number => {
        switch (size) {
            case "large":
                return 17;
            case 'medium':
                return 15;
            case "small":
                return 13;
            default:
                return 15;
        }
    }

    return (
        <Template>
            <Button
                {...props}
                size={size}
                sx={{ textTransform: 'capitalize', fontFamily: 'inherit', height: height, fontSize: fontSize }}
            >
                {label}
                </Button>
        </Template>
    );
}
