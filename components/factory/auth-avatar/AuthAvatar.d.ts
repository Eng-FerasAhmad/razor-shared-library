import { ReactElement } from '../../../../node_modules/react';
import { MenuGroup } from './types';
type Props = {
    menuItems: MenuGroup[];
    avatarSrc?: string;
};
export declare function AuthAvatar({ menuItems, avatarSrc }: Props): ReactElement;
export {};
