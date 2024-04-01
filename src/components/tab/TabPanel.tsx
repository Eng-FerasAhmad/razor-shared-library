import Box from '@mui/material/Box';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: Props): JSX.Element {
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
