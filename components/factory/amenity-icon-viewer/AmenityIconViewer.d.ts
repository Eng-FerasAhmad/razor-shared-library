import { ReactElement } from '../../../../node_modules/react';
interface IconItem {
    id: string | number;
    name: string;
    icon: ReactElement;
}
interface IconViewerProps {
    icons: IconItem[];
}
export declare function AmenityIconViewer({ icons }: IconViewerProps): ReactElement;
export {};
