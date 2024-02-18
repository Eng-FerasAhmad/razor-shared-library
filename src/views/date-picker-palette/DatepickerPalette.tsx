import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DatepickerCustom } from 'src/components/datepicker/Datepicker';

export function DatepickerPalette(): JSX.Element {
    const [value, setValue] = useState<Dayjs | null>(null);
    const changeHandler = (val: Dayjs): void => {
        setValue(val);
    };

    return (
        <Box sx={{ margin: 2, width: 300 }}>
            <DatepickerCustom
                label="Start date"
                locale="de"
                value={value}
                onChange={(newValue) => changeHandler(newValue!)}
            />
        </Box>
    );
}
