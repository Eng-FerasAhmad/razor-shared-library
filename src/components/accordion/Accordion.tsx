import { Template } from 'src/components/_template/Template';
import { ReactElement } from 'react';
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { AccordionItems } from 'components/accordion/types';

interface Props {
    items: AccordionItems[];
}
export function AccordionCustom({ items, ...props }: Props): ReactElement {
    return (
        <Template>
            {items.map((item, index) => {
                return (
                    <Accordion {...props} key={index}>
                        <AccordionSummary
                            expandIcon={item.icon}
                            onClick={item.onOpenAction}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            {item.title}
                        </AccordionSummary>
                        <AccordionDetails>{item.details}</AccordionDetails>
                        <AccordionActions>{item.actions}</AccordionActions>
                    </Accordion>
                );
            })}
        </Template>
    );
}
