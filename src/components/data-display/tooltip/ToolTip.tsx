import { ReactElement } from 'react';

import Tooltip from '@mui/material/Tooltip';

interface Props {
    title: string;
    children: ReactElement;
}

export function ToolTipCustom({ title, children }: Props): ReactElement {
    return (
        <Tooltip title={title} data-testid="tooltip">
            {children}
        </Tooltip>
    );
}
