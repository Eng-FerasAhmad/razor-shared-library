import { ReactElement } from 'react';

import { Step, StepLabel, Stepper } from '@mui/material';

import { Template } from 'components/_template/Template';

interface Props {
    steps: string[];
    activeStep: number;
    alternativeLabel?: boolean;
}

export function StepperCustom({
    steps,
    activeStep,
    alternativeLabel = false,
}: Props): ReactElement {
    return (
        <Template>
            <Stepper
                activeStep={activeStep}
                alternativeLabel={alternativeLabel}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Template>
    );
}
