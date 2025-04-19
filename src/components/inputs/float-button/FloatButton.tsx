import { ReactElement, ReactNode } from 'react';

import Fab, { FabProps } from '@mui/material/Fab';

interface Props {
    icon: ReactNode;
}

export function FloatButton({
    icon,
    ...props
}: Props & FabProps): ReactElement {
    return <Fab {...props}>{icon}</Fab>;
}
