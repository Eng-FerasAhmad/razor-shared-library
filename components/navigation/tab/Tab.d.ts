import { ReactElement } from '../../../../node_modules/react';
import { TabsProps } from '@mui/material/Tabs';
import { TabItem } from '../../../../../../../../src/components/navigation/tab/types';
interface Props {
    tabItem: TabItem[];
}
export declare function TabCustom({ tabItem, value, onChange, ...props }: Props & TabsProps): ReactElement;
export {};
