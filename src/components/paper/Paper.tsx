import Paper, { PaperProps } from '@mui/material/Paper';
import { PropsWithChildren } from 'react';

export function PaperCustom({
    children,
    ...props
}: PropsWithChildren<PaperProps>): JSX.Element {
    return <Paper {...props}>{children}</Paper>;
}
