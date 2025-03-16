import { Meta, StoryObj } from '@storybook/react';

import { generateImageUrls } from 'components/factory/studio/fixed-grid-view/utils';

import { Studio } from './Studio';

const images = generateImageUrls(100);

const meta: Meta<typeof Studio> = {
    title: 'Factory/Studio',
    component: Studio,
    argTypes: {
        fullscreen: {
            control: 'boolean',
        },
        infoButton: {
            control: 'boolean',
        },
        buttonMore: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Studio>;

export const Default: Story = {
    render: (args) => (
        <div style={{ marginTop: '50px' }}>
            <Studio {...args} />
        </div>
    ),
    args: {
        media: images,
        noMediaTitle: 'No Media',
        fullscreen: true,
        infoButton: true,
        buttonMore: 'Show more',
        defaultView: 'fixedGrid',
    },
};
