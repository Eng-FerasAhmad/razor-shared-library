import { SxProps } from '@mui/material';
export declare const selectedStyles: SxProps;
export declare const drawerSx: (isOpen: boolean, width: number, collapsedWidth: number, top: number) => SxProps;
export declare const groupTitleSx: SxProps;
export declare const menuItemButtonSx: (selected: boolean, isOpen: boolean) => SxProps;
export declare const menuItemIconSx: (isOpen: boolean) => SxProps;
export declare const submenuItemSx: (selected: boolean) => SxProps;
export declare const popupItemSx: (selected: boolean) => SxProps;
export declare const popupListItemTextSx: SxProps;
export declare const MenuGroupContainer: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & {
    isOpen: boolean;
}, import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
