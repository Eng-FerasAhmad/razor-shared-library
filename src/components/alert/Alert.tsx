import Alert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Template } from 'src/components/_template/Template';

interface Props {
    text: string;
}
export function AlertCustom({
    text,
    ...props
}: Props & AlertProps): JSX.Element {
    return (
        <Template>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert {...props}>{text}</Alert>
            </Stack>
        </Template>
    );
}
