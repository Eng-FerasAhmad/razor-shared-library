import { Box } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Button, InputText } from 'src/index';
import { fonts } from 'src/shared/fonts';

export default function ButtonPalette(): JSX.Element {
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

            <Box sx={{ width: 300 }}>
                <InputText
                    label="Name"
                    value={valueInput}
                    size="small"
                    onChange={(e) => changeHandler(e)}
                />
            </Box>
        </Box>
    );
}
