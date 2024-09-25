import { ThemeProvider, createTheme } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { color } from 'shared/color';

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
    },

    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
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
