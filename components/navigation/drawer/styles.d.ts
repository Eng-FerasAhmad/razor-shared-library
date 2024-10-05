import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
export declare const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
export declare const DrawerAppBar: import('@emotion/styled').StyledComponent<import('@mui/material').AppBarOwnProps & Omit<import('@mui/material').PaperOwnProps, "classes" | "color" | "position"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLElement> | null | undefined;
}, "children" | "className" | "style" | "classes" | "sx" | "variant" | "color" | "elevation" | "square" | "position" | "enableColorOnDark"> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & AppBarProps, {}, {}>;
export {};
