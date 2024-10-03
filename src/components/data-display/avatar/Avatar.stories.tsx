import Stack from '@mui/material/Stack';
import { AvatarGroup } from '@mui/material';

import { color } from 'shared/color';
import { AvatarCustom } from 'components/data-display/avatar/Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: AvatarCustom,
    title: 'Data Display/Avatar',
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: { type: 'text' },
        },
        alt: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof AvatarCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
    render: () => (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <AvatarCustom>H</AvatarCustom>
                <AvatarCustom sx={{ bgcolor: color.primary.main }}>
                    N
                </AvatarCustom>
                <AvatarCustom sx={{ bgcolor: color.info.main }}>N</AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarCustom
                    sx={{
                        bgcolor: color.info.main,
                        width: 24,
                        height: 24,
                        fontSize: 12,
                    }}
                    src={'./favicon.svg'}
                >
                    OP
                </AvatarCustom>

                <AvatarCustom
                    sx={{ bgcolor: color.info.main, width: 36, height: 36 }}
                    src={'./favicon.svg'}
                >
                    OP
                </AvatarCustom>

                <AvatarCustom
                    sx={{ bgcolor: color.info.main, width: 56, height: 56 }}
                    src={'./favicon.svg'}
                >
                    OP
                </AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarCustom
                    sx={{
                        bgcolor: color.warning.light,
                        width: 24,
                        height: 24,
                        fontSize: 12,
                    }}
                    variant="square"
                >
                    N
                </AvatarCustom>

                <AvatarCustom
                    sx={{ bgcolor: color.warning.main, width: 36, height: 36 }}
                    variant="square"
                >
                    N
                </AvatarCustom>

                <AvatarCustom
                    sx={{
                        bgcolor: color.warning.dark,
                        width: 56,
                        height: 56,
                        borderRadius: 5,
                    }}
                    variant="square"
                >
                    N
                </AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarGroup
                    renderSurplus={(surplus) => (
                        <span>+{surplus.toString()[0]}k</span>
                    )}
                    total={4251}
                >
                    <AvatarCustom
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                    />
                    <AvatarCustom
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                    <AvatarCustom
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                    />
                    <AvatarCustom
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                    />
                </AvatarGroup>
            </Stack>
        </Stack>
    ),
    args: {
        title: 'Badge',
        color: 'primary',
    },
};

export const Default: Story = {
    args: {
        src: './favicon.svg',
        alt: 'avatar alt',
    },
};
