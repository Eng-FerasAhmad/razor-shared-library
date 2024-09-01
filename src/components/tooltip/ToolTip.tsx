import Tooltip from '@mui/material/Tooltip';
import { ReactElement } from 'react';

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
