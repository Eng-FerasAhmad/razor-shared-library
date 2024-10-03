import { ReactElement, ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { color } from 'shared/color';
import { fonts } from 'shared/fonts';

interface Props {
    children: ReactNode;
}

const theme = createTheme({
    palette: {
        primary: color.primary,
        secondary: color.secondary,
        warning: color.warning,
        error: color.error,
        info: color.info,
        success: color.success,
        text: {
            primary: color.fontDark,
        },
    },
    typography: {
        fontFamily: fonts.primary,
    },
    transitions: {
        duration: {
            shortest: 150,
            short: 200,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
        easing: {
            easeIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export const Template = ({ children }: Props): ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
