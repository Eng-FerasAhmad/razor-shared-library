import { LinearProgress } from '@mui/material';

interface Props {
    color?: 'inherit' | 'primary' | 'secondary';
}

export function LinearProgressCustom({ color = 'primary' }: Props) {
    return <LinearProgress color={color} />;
}
