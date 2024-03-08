import Rating, { RatingProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Template } from 'src/components/_template/Template';

interface Props {
    label: string;
}

export function RatingCustom({
    label,
    ...props
}: Props & RatingProps): JSX.Element {
    return (
        <Template>
            <Typography component="legend">{label}</Typography>
            <Rating name="rating" {...props} />
        </Template>
    );
}
