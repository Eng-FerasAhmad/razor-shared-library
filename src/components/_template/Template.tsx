import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import 'react-tabs/style/react-tabs.css';
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

export const Template = ({ children }: Props): JSX.Element => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
