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
            <Button
                label="Primary"
                variant="contained"
                size="medium"
                color="primary"
            />
            <InputText
                label="Name"
                value={valueInput}
                size="small"
                onChange={(e) => changeHandler(e)}
            />
        </Box>
    );
}
