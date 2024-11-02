import { ReactElement, ReactNode } from 'react';

import { Template } from 'components/_template/Template';

interface Props {
    children: ReactNode;
}
export function MuiTemplate({ children }: Props): ReactElement {
    return <Template>{children}</Template>;
}
