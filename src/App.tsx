import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ButtonPalette from './views/button-palette/ButtonPalette';
import ColorPalette from 'src/views/color-palette/ColorPalette';
import InputTextPalette from 'src/views/input-text-palette/InputTextPalette';

export default function App(): JSX.Element {
    return (
        <div>
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
        </div>
    );
}
