import Paper, { PaperProps } from '@mui/material/Paper';
import { PropsWithChildren, ReactElement } from 'react';

export function PaperCustom({
    children,
    ...props
}: PropsWithChildren<PaperProps>): ReactElement {
    return <Paper {...props}>{children}</Paper>;
}
