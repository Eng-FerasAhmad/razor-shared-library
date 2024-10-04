import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Carousel } from 'components/surfaces/carousel/Carousel';

const meta: Meta<typeof Carousel> = {
    component: Carousel,
    title: 'Surfaces/Carousel',
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: false,
            description: 'Array of carousel items, each with a content field.',
        },
        borderRadius: {
            control: { type: 'number' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
    args: {
        items: [
            {
                content: (
                    <Box
                        sx={{
                            backgroundColor: '#5ed4a5',
                            height: '100px',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Slide 1: Custom content with a Box!
                    </Box>
                ),
            },
            {
                content: (
                    <Box
                        sx={{
                            backgroundColor: '#ffcc99',
                            height: '100px',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Slide 2: Custom content with a Box!
                    </Box>
                ),
            },
            {
                content: (
                    <Box
                        sx={{
                            backgroundColor: '#66a3ff',
                            height: '100px',
                            width: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        Slide 3: Custom content with a Box!
                    </Box>
                ),
            },
        ],
        borderRadius: 0,
    },
};
