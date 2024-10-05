import { ReactElement } from '../../../../node_modules/react';
interface Props {
    steps: string[];
    activeStep: number;
    alternativeLabel?: boolean;
}
export declare function StepperCustom({ steps, activeStep, alternativeLabel, }: Props): ReactElement;
export {};
