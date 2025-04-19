import CircularProgress from '@mui/material/CircularProgress';

interface Props {
    size?: number;
    color?: 'inherit' | 'primary' | 'secondary';
}

export function CircularProgressCustom({
    size = 40,
    color = 'primary',
}: Props) {
    return <CircularProgress size={size} color={color} />;
}
