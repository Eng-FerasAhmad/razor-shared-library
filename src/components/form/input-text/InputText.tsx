import TextField, { TextFieldProps } from '@mui/material/TextField';

export function InputText({ ...props }: TextFieldProps): JSX.Element {
    return <TextField {...props} data-testid="input-text-container" />;
}
