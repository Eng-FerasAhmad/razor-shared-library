import { ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

interface IconItem {
    id: string | number;
    name: string;
    icon: ReactElement;
}

interface IconViewerProps {
    icons: IconItem[];
}

export function IconViewer({ icons }: IconViewerProps): ReactElement {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {icons.map((iconItem) => (
                <Box
                    key={iconItem.id}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: 'background.paper',
                    }}
                >
                    {iconItem.icon}
                    <Typography variant="body1">{iconItem.name}</Typography>
                </Box>
            ))}
        </Box>
    );
}
