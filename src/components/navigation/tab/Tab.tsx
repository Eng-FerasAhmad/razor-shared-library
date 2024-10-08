import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs, { TabsProps } from '@mui/material/Tabs';

import { Template } from 'components/_template/Template';
import TabPanel from 'components/navigation/tab/TabPanel';
import { TabItem } from 'components/navigation/tab/types';

interface Props {
    tabItem: TabItem[];
}

function a11yProps(index: number): {
    id: string;
    'aria-controls': string;
} {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export function TabCustom({
    tabItem,
    value,
    onChange,
    ...props
}: Props & TabsProps): ReactElement {
    return (
        <Template>
            <Box sx={{ width: '100%' }} data-testid="tab">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={onChange}
                        aria-label="custom tabs"
                        {...props}
                    >
                        {tabItem.map((item, index) => {
                            return (
                                <Tab
                                    label={item.label}
                                    {...a11yProps(index)}
                                    key={index}
                                />
                            );
                        })}
                    </Tabs>
                </Box>
                {tabItem.map((item, index) => {
                    return (
                        <TabPanel
                            value={value}
                            index={index}
                            key={index}
                            data-testid="tab-panel"
                        >
                            {item.content}
                        </TabPanel>
                    );
                })}
            </Box>
        </Template>
    );
}
