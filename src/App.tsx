import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { fonts } from './shared/fonts';
import { CardPalette } from './views/card-palette/CardPalette';
import { DateTimePalette } from './views/date-time-palette/DateTimePalette';
import { DialogPalette } from './views/dialog-palette/DialogPalette';
import FormPalette from './views/form-palette/FormPalette';
import { MenuPalette } from './views/menu-palette/MenuPalette';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps): JSX.Element {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div style={{ padding: 16 }}>
                    <div>{children}</div>
                </div>
            )}
        </div>
    );
}

function a11yProps(index: number): { id: string; 'aria-controls': string } {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs(): JSX.Element {
    const [value, setValue] = useState(0);

    const handleChange = (
        _event: SyntheticEvent,
        newValue: number
    ): void => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                flexGrow: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                height: '95vh',
                fontFamily: fonts.primary,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Form" {...a11yProps(0)} />
                <Tab label="Menu" {...a11yProps(1)} />
                <Tab label="Dialog" {...a11yProps(2)} />
                <Tab label="Date & Time" {...a11yProps(3)} />
                <Tab label="Card" {...a11yProps(4)} />
                <Tab label="Carousel" {...a11yProps(5)} />
                <Tab label="Toast" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FormPalette />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MenuPalette />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DialogPalette />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DateTimePalette />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <CardPalette />
            </TabPanel>
            <TabPanel value={value} index={5}>
                Carousel
            </TabPanel>
            <TabPanel value={value} index={6}>
                Toast
            </TabPanel>
        </div>
    );
}
