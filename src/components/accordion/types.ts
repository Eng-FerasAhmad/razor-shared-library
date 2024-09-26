import { ReactNode } from 'react';

export interface AccordionItems {
    title: string;
    details: string;
    onOpenAction: () => void;
    actions?: ReactNode;
}
