import { Template } from 'src/components/_template/Template';
import { PropsWithChildren, ReactElement } from 'react';
import { Badge, BadgeProps } from '@mui/material';

export function BadgeCustom({
    children,
    ...props
}: PropsWithChildren<BadgeProps>): ReactElement {
    return (
        <Template>
            <Badge {...props} data-testid="badge">
                {children}
            </Badge>
        </Template>
    );
}
