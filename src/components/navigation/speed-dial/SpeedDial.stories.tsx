import { FileCopyOutlined, Save, Print, Share } from '@mui/icons-material';

import { SpeedDialActionType } from 'components/navigation/speed-dial/types';
import { SpeedDialCustom } from 'components/navigation/speed-dial/SpeedDial';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SpeedDialCustom> = {
    component: SpeedDialCustom,
    title: 'Navigation/SpeedDialCustom',
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: {
            control: { type: 'text' },
            description: 'Aria-label for accessibility',
        },
        icon: {
            control: { type: 'object' },
            description: 'Icon for the main SpeedDial button',
        },
        position: {
            control: { type: 'object' },
            description: 'Position for the SpeedDial component',
        },
        actions: {
            control: { type: 'object' },
            description: 'Array of action items with icon and name',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SpeedDialCustom>;

const sampleActions: SpeedDialActionType[] = [
    {
        icon: <FileCopyOutlined />,
        name: 'Copy',
        onClick: () => console.log('Copy'),
    },
    { icon: <Save />, name: 'Save', onClick: () => console.log('Save') },
    { icon: <Print />, name: 'Print', onClick: () => console.log('Print') },
    { icon: <Share />, name: 'Share', onClick: () => console.log('Share') },
];

export const Default: Story = {
    render: () => {
        return (
            <SpeedDialCustom
                ariaLabel="SpeedDial example"
                actions={sampleActions}
            />
        );
    },
};
