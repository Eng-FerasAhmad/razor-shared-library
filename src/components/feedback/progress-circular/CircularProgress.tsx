import CircularProgress from '@mui/material/CircularProgress';

import { Template } from 'components/_template/Template';

interface Props {
    size?: number;
    color?: 'inherit' | 'primary' | 'secondary';
}

export function CircularProgressCustom({
    size = 40,
    color = 'primary',
}: Props) {
    return (
        <Template>
            <CircularProgress size={size} color={color} />
        </Template>
    );
}
