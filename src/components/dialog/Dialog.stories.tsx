import type { Meta, StoryObj } from '@storybook/react';
import { DialogCustom } from './Dialog';
import { useState } from 'react';
import { Button } from '@mui/material';
import { ButtonCustom } from 'components/form/button/Button';
import { fonts } from 'shared/fonts';
import Box from '@mui/material/Box';

const meta: Meta<typeof DialogCustom> = {
    title: 'Components/Dialog',
    tags: ['autodocs'],
    component: DialogCustom,
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        actions: {
            control: { type: 'object' },
        },
        open: {
            control: { type: 'boolean' },
        },
        headerColor: {
            control: { type: 'color' },
        },
        headerFontColor: {
            control: { type: 'color' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <Box sx={{ margin: 2, width: 300, fontFamily: fonts.primary }}>
                <Button
                    variant="contained"
                    color={'primary'}
                    onClick={handleOpen}
                >
                    Open Dialog
                </Button>
                <DialogCustom
                    actions={
                        <ButtonCustom label="Action" variant="contained" />
                    }
                    {...args}
                    open={open}
                    handleClose={handleClose}
                />
            </Box>
        );
    },
    args: {
        title: 'Default Dialog',
        actions: null,
    },
};
