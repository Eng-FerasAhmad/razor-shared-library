import { PropsWithChildren, ReactElement } from 'react';

import Badge, { BadgeProps } from '@mui/material/Badge';

export function BadgeCustom({
    children,
    ...props
}: PropsWithChildren<BadgeProps>): ReactElement {
    return (
        <Badge {...props} data-testid="badge">
            {children}
        </Badge>
    );
}
