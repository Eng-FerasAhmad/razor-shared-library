import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Template } from 'src/components/_template/Template';

export function InputText({ ...props }: TextFieldProps): JSX.Element {
    return (
        <Template>
            <TextField {...props} data-testid="input-text-container" />
        </Template>
    );
}
