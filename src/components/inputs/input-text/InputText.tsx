import { ReactElement } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';

import { color } from 'src/shared/color';

export function InputText({ ...props }: TextFieldProps): ReactElement {
    return (
        <TextField
            {...props}
            data-testid="input-text-container"
            sx={{ backgroundColor: color.light, width: '100%' }}
        />
    );
}
