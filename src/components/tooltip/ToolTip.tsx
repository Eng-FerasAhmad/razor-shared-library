

import Tooltip from '@mui/material/Tooltip';

interface Props {
    title: string;
    children: JSX.Element,
}

export function ToolTipCustom({
    title,
    children,
}: Props): JSX.Element {
    return (
        <Tooltip title={title} data-testid="tooltip">
            {children}
        </Tooltip>
    );
}
