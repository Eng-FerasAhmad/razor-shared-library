import { ReactNode } from 'react';

export interface AccordionItems {
    title: string;
    details: ReactNode;
    onOpenAction: () => void;
    actions?: ReactNode;
}
