import { ReactElement, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandLess from '@mui/icons-material/ExpandLess';

import { Template } from 'components/_template/Template';
import { AccordionItems } from 'components/surfaces/accordion/types';

interface Props {
    items: AccordionItems[];
}

export function AccordionCustom({ items, ...props }: Props): ReactElement {
    const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

    const handleChange =
        (index: number) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpandedIndex(isExpanded ? index : false);
        };

    return (
        <Template>
            {items.map((item, index) => {
                const isExpanded = expandedIndex === index;
                return (
                    <Accordion
                        {...props}
                        key={index}
                        expanded={isExpanded}
                        onChange={handleChange(index)}
                        sx={{
                            border: 0,
                            borderRadius: isExpanded ? '4px' : 0,
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                            '&:before': {
                                display: isExpanded ? '' : 'none',
                            },
                        }}
                    >
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
