import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
interface Props {
    value: unknown;
    children: ReactNode;
}
export default function ConditionalRender({ value, children, }: PropsWithChildren<Props>): ReactNode;
export {};
