import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Template } from 'src/components/_template/Template';
import { color } from 'src/shared/color';
import { ReactElement } from 'react';

export function InputText({ ...props }: TextFieldProps): ReactElement {
    return (
        <Template>
            <TextField
                {...props}
                data-testid="input-text-container"
                sx={{ backgroundColor: color.light, width: '100%' }}
            />
        </Template>
    );
}
