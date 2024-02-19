import { Box } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Button, Checkbox, InputText } from 'src/index';
import { fonts } from 'src/shared/fonts';

export default function FormPalette(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');

    const changeHandler = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
        setValueInput(e.target.value);
    };

    return (
        <Box sx={{ fontFamily: fonts.primary }} data-testid="button-palette">
            <Box sx={{ width: 200 }}>
                <Button
                    label="Primary"
                    variant="contained"
                    size="medium"
                    color="primary"
                />
            </Box>

            <Box sx={{ width: 300, marginTop: 2 }}>
                <InputText
                    label="Name"
                    value={valueInput}
                    size="small"
                    onChange={(e) => changeHandler(e)}
                />
            </Box>

            <Box sx={{ marginTop: 2 }}>
                <Checkbox size="medium" label="Checkbox" />
            </Box>
        </Box>
    );
}
