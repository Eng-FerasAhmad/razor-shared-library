import { ReactElement, useState } from 'react';

import { Box } from '@mui/material';

import { AlertCustom } from 'src/components/alert/Alert';
import { ButtonCustom } from 'src/components/form/button/Button';
import { MenuCustom } from 'src/components/menu/Menu';
import { PaperCustom } from 'src/components/paper/Paper';
import { ToolTipCustom } from 'src/components/tooltip/ToolTip';

export function MenuPalette(): ReactElement {
    const [selected, setSelected] = useState<string>('');

    const itemsMenu = [
        {
            title: 'item 11',
            action: () => {
                setSelected('item 11');
            },
            icon: <div>icon</div>,
        },
        {
            title: 'item 22',
            action: () => {
                setSelected('item 22');
            },
            icon: <div>icon</div>,
        },
    ];

    return (
        <Box sx={{ margin: 2, width: 200 }} data-testid="menu-palette">
            <MenuCustom
                items={itemsMenu}
                selected={selected}
                anchor={<ButtonCustom label="Click" variant="contained" />}
            />
            <AlertCustom color="info" variant="standard" text="Alert Text" />

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <PaperCustom elevation={3}>content</PaperCustom>
            </Box>

            <Box sx={{ background: 'green' }}>
                <ToolTipCustom title="this is tooltip">
                    <div>Tooltip</div>
                </ToolTipCustom>
            </Box>
        </Box>
    );
}
