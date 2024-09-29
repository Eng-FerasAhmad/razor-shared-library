import { AccordionItems } from 'components/accordion/types';

import type { Meta, StoryObj } from '@storybook/react';

import { AccordionCustom } from './Accordion';

const meta: Meta<typeof AccordionCustom> = {
    title: 'Components/Accordion',
    tags: ['autodocs'],
    component: AccordionCustom,
    argTypes: {
        items: {
            control: { type: 'object' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                title: 'Item 1',
                details: 'Detail 1',
                onOpenAction: () => console.log('Opened Item 1'),
            },
            {
                title: 'Item 2',
                details: 'Detail 2',
                onOpenAction: () => console.log('Opened Item 2'),
            },
        ] as AccordionItems[],
    },
};
