import { PropsWithChildren, ReactElement } from 'react';

import Paper, { PaperProps } from '@mui/material/Paper';

export function PaperCustom({
    children,
    ...props
}: PropsWithChildren<PaperProps>): ReactElement {
    return <Paper {...props}>{children}</Paper>;
}
