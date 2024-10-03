import { Dayjs } from 'dayjs';
import { ReactElement, useState } from 'react';

import { Box } from '@mui/material';

import { DatepickerCustom } from 'components/datepicker/date-picker/Datepicker';
import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

export function DateTimePalette(): ReactElement {
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
                sx={{ margin: 2, width: 300 }}
                onChange={(newValue) => changeHandler(newValue!)}
            />
            <TimePickerCustom
                label="Select Time"
                locale="de"
                sx={{ margin: 2, width: 300 }}
            />
        </Box>
    );
}
