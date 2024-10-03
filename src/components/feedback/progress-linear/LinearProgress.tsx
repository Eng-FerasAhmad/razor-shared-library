import { LinearProgress } from '@mui/material';

import { Template } from 'components/_template/Template';

interface Props {
    color?: 'inherit' | 'primary' | 'secondary';
}

export function LinearProgressCustom({ color = 'primary' }: Props) {
    return (
        <Template>
            <LinearProgress color={color} />
        </Template>
    );
}
