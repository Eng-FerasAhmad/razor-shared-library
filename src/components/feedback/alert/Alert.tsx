import { ReactElement } from 'react';

import Alert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface Props {
    text: string;
}
export function AlertCustom({
    text,
    ...props
}: Props & AlertProps): ReactElement {
    return (
        <Stack sx={{ width: '100%' }} spacing={2} data-testid="alert">
            <Alert {...props}>{text}</Alert>
        </Stack>
    );
}
