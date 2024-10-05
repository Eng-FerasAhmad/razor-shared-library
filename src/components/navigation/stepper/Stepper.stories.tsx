import { StepperCustom } from 'components/navigation/stepper/Stepper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StepperCustom> = {
    component: StepperCustom,
    title: 'Navigation/Stepper',
    tags: ['autodocs'],
    argTypes: {
        activeStep: {
            control: { type: 'number' },
            description: 'Controls the current active step',
        },
        steps: {
            control: { type: 'object' },
            description: 'Array of steps with labels',
        },
        alternativeLabel: {
            control: { type: 'boolean' },
            description: 'Toggle to display alternative labels',
        },
    },
};

export default meta;

type Story = StoryObj<typeof StepperCustom>;

// Sample steps array
const sampleSteps = [
    'Step 1: Select campaign settings',
    'Step 2: Create an ad group',
    'Step 3: Create an ad',
];

export const Default: Story = {
    render: () => {
        return (
            <StepperCustom
                steps={sampleSteps}
                activeStep={0}
                alternativeLabel
            />
        );
    },
};
