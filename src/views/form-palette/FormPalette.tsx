import { Box, SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { AutoCompleteCustom } from 'src/components/auto-complete/AutoComplete';
import { AutoCompleteOptions } from 'src/components/auto-complete/types';
import { RatingCustom } from 'src/components/form/rating/Rating';
import { SearchCustom } from 'src/components/form/search/Search';
import { SwitchCustom } from 'src/components/form/switch/Switch';
import { Button, Checkbox, InputSelect, InputText, Textarea } from 'src/index';
import { fonts } from 'src/shared/fonts';

const autoOptions: AutoCompleteOptions[] = [
    {
        label: 'Name',
        value: 'name',
        icon: <>i</>,
    },
    {
        label: 'Age',
        value: 10,
        icon: <>i</>,
    },
];

export default function FormPalette(): JSX.Element {
    const [valueInput, setValueInput] = useState<string>('');
    const [selectInput, setSelectInput] = useState<string>('');
    const [rating, setRating] = useState<number | null>(2);
    const [autoValue, setAutoValue] = useState<AutoCompleteOptions | null>(
        null
    );

    const changeHandler = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
        setValueInput(e.target.value);
    };

    const handleChangeSelect = (event: SelectChangeEvent): void => {
        setSelectInput(event.target.value);
    };

    const handleChangeSwitch = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        console.log(event.target.checked);
    };

    const handleChangeAutoComplete = (
        newValue: AutoCompleteOptions | null
    ): void => {
        setAutoValue(newValue);
        console.log('auto value', newValue);
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

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <InputSelect
                    items={[
                        { label: 'Barber', value: '1' },
                        { label: 'Body Care', value: '2' },
                    ]}
                    label="Choose Shop"
                    value={selectInput}
                    handleChange={handleChangeSelect}
                />
            </Box>

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <SwitchCustom
                    label="Switch"
                    labelPlacement="start"
                    color="primary"
                    onChange={handleChangeSwitch}
                />
            </Box>

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <Textarea
                    label="Textarea"
                    value={valueInput}
                    size="small"
                    onChange={(e) => changeHandler(e)}
                    rows={10}
                />
            </Box>

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <SearchCustom icon={<>i</>} placeholder="Search" size="small" />
            </Box>

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <RatingCustom
                    label="Rating"
                    value={rating}
                    onChange={(_e, newValue) => {
                        setRating(newValue);
                        console.log(newValue);
                    }}
                />
            </Box>

            <Box sx={{ marginTop: 2, width: '300px' }}>
                <AutoCompleteCustom
                    label="User"
                    options={autoOptions}
                    value={autoValue}
                    onChange={handleChangeAutoComplete}
                />
            </Box>
        </Box>
    );
}
