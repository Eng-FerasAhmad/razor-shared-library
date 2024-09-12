import { ReactNode } from 'react';

export interface AccordionItems {
    title: string;
    details: string;
    icon: ReactNode;
    onOpenAction: () => void;
    actions?: ReactNode;
}
