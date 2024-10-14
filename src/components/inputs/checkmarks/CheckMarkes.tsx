import { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface Props {
    label: string;
    options: Record<string, string>[];
    labelKey: keyof Record<string, string>;
    valueKey: keyof Record<string, string>;
    onChange: (selectedItems: Record<string, string>[]) => void;
}

export function MultipleSelectCheckmarks({
    label,
    options,
    labelKey,
    valueKey,
    onChange,
}: Props) {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedItems>) => {
        const {
            target: { value },
        } = event;
        const newSelectedItems =
            typeof value === 'string' ? value.split(',') : value;
        setSelectedItems(newSelectedItems as string[]);

        onChange(
            options.filter((option) =>
                newSelectedItems.includes(option[valueKey])
            )
        );
    };

    return (
        <div>
            <FormControl sx={{ minWidth: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedItems}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select" />}
                    renderValue={(selected) => {
                        const selectedLabels = options
                            .filter((option) =>
                                (selected as string[]).includes(
                                    option[valueKey]
                                )
                            )
                            .map((option) => option[labelKey]);
                        return selectedLabels.join(', ');
                    }}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option[valueKey]}
                            value={option[valueKey]}
                        >
                            <Checkbox
                                checked={selectedItems.includes(
                                    option[valueKey]
                                )}
                            />
                            <ListItemText primary={option[labelKey]} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
