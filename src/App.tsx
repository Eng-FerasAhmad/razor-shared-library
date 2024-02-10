import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { color } from './shared/color';
import { fonts } from './shared/fonts';
import ButtonPalette from './views/button-palette/ButtonPalette';
import { CardPalette } from './views/card-palette/CardPalette';
import { ColorPalette } from 'src/views/color-palette/ColorPalette';
import { DialogPalette } from 'src/views/dialog-palette/DialogPalette';
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
            <Tabs style={{ fontFamily: fonts.primary }}>
                <TabList>
                    <Tab>Color</Tab>
                    <Tab>Button</Tab>
                    <Tab>input-text</Tab>
                    <Tab>Card</Tab>
                    <Tab>Dialog</Tab>
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
                <TabPanel>
                    <CardPalette />
                </TabPanel>
                <TabPanel>
                    <DialogPalette />
                </TabPanel>
            </Tabs>
        </ThemeProvider>
    );
}
