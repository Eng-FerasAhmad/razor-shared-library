import { ReactElement } from 'react';

import TextField, { TextFieldProps } from '@mui/material/TextField';

import { Template } from 'src/components/_template/Template';
import { color } from 'src/shared/color';

export function Textarea({ ...props }: TextFieldProps): ReactElement {
    return (
        <Template>
            <TextField
                data-testid="textarea"
                {...props}
                sx={{ backgroundColor: color.light, width: '100%' }}
                multiline
            />
        </Template>
    );
}
