import { ReactElement, MouseEvent } from '../../../../node_modules/react';
type Props = {
    onClick: (e: MouseEvent<HTMLElement>) => void;
    avatarSrc?: string;
};
export default function AvatarTrigger({ onClick, avatarSrc, }: Props): ReactElement;
export {};
