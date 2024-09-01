import Fab, { FabProps } from '@mui/material/Fab';
import { ReactElement, ReactNode } from 'react';
import { Template } from 'src/components/_template/Template';

interface Props {
    icon: ReactNode;
}

export function FloatButton({
    icon,
    ...props
}: Props & FabProps): ReactElement {
    return (
        <Template>
            <Fab {...props}>{icon}</Fab>
        </Template>
    );
}
