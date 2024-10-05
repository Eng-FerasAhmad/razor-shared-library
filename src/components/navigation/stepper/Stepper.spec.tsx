import { StepperCustom } from 'components/navigation/stepper/Stepper';

import { render, screen } from '@testing-library/react';

const sampleSteps = [
    'Step 1: Select campaign settings',
    'Step 2: Create an ad group',
    'Step 3: Create an ad',
];

describe('StepperCustom Component', () => {
    it('should render the correct number of steps', () => {
        render(
            <StepperCustom
                steps={sampleSteps}
                activeStep={0}
                alternativeLabel={false}
            />
        );

        sampleSteps.forEach((step) => {
            expect(screen.getByText(step)).toBeInTheDocument();
        });
    });

    it('should highlight the correct active step', () => {
        render(
            <StepperCustom
                steps={sampleSteps}
                activeStep={1}
                alternativeLabel={false}
            />
        );

        const step2 = screen.getByText('Step 2: Create an ad group');
        expect(step2.closest('span')).toHaveClass('Mui-active');
    });
});
