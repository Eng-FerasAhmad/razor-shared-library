import { ReactElement } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandLess from '@mui/icons-material/ExpandLess';

import { Template } from 'src/components/_template/Template';
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
                            expandIcon={<ExpandLess />}
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
