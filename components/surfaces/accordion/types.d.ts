import { ReactNode } from '../../../../node_modules/react';
export interface AccordionItems {
    title: string;
    details: ReactNode;
    onOpenAction: () => void;
    actions?: ReactNode;
}
