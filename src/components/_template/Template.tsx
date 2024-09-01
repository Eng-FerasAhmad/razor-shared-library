import { ThemeProvider, createTheme } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { color } from 'src/shared/color';

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
});

export const Template = ({ children }: Props): ReactElement => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
