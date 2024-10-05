import { ReactElement, ReactNode } from '../../../../node_modules/react';
interface Props {
    appTitle: string;
    header: ReactNode;
    open: boolean;
    headerIcon?: ReactNode;
    appClickHandler: () => void;
}
export default function DrawerToolbar({ appTitle, header, open, headerIcon, appClickHandler, }: Props): ReactElement;
export {};
