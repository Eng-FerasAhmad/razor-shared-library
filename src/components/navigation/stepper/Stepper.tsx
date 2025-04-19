import { ReactElement } from 'react';

import { Step, StepLabel, Stepper } from '@mui/material';

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
        <Stepper activeStep={activeStep} alternativeLabel={alternativeLabel}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
