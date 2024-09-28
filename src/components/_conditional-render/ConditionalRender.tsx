import { PropsWithChildren, ReactNode } from 'react';

interface Props {
    value: unknown;
    children: ReactNode;
}

export default function ConditionalRender({
    value,
    children,
}: PropsWithChildren<Props>): ReactNode {
    return value != null ? <>{children}</> : null;
}
