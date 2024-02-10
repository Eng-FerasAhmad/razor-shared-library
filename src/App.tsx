import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ButtonPalette from './views/button-palette/ButtonPalette';
import { color } from 'src/index';
import { ColorPalette } from 'src/views/color-palette/ColorPalette';
import InputTextPalette from 'src/views/input-text-palette/InputTextPalette';

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

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Tabs>
                <TabList>
                    <Tab>Color</Tab>
                    <Tab>Button</Tab>
                    <Tab>input-text</Tab>
                </TabList>

                <TabPanel>
                    <ColorPalette />
                </TabPanel>
                <TabPanel>
                    <ButtonPalette />
                </TabPanel>
                <TabPanel>
                    <InputTextPalette />
                </TabPanel>
            </Tabs>
        </ThemeProvider>
    );
}
