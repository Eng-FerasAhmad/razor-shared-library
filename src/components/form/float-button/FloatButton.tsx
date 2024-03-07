import Fab, { FabProps } from '@mui/material/Fab';
import { ReactNode } from 'react';
import { Template } from 'src/components/_template/Template';

interface Props {
    icon: ReactNode;
}

export function FloatButton({ icon, ...props }: Props & FabProps): JSX.Element {
    return (
        <Template>
            <Fab {...props}>{icon}</Fab>
        </Template>
    );
}
