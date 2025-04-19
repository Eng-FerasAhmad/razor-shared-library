// Template.tsx
import { ReactElement, ReactNode } from 'react';

import { ThemeProvider, Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme } from 'components/_template/theme';

interface Props {
    children: ReactNode;
    theme?: Theme;
}

export const Template = ({
    children,
    theme = defaultTheme,
}: Props): ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
