import { ReactElement, ReactNode } from 'react';

import Box from '@mui/material/Box';

interface Props {
    children?: ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: Props): ReactElement {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            data-testid="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Box>
    );
}
