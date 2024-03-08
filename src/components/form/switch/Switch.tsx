import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Template } from 'src/components/_template/Template';

interface Props {
    label?: string;
    labelPlacement?: 'bottom' | 'start' | 'end' | 'top';
}

export function SwitchCustom({
    label,
    labelPlacement,
    ...props
}: Props & SwitchProps): JSX.Element {
    return (
        <Template>
            <FormControl component="fieldset" data-testid="switch">
                <FormControlLabel
                    value="start"
                    control={<Switch {...props} />}
                    label={label}
                    labelPlacement={labelPlacement}
                />
            </FormControl>
        </Template>
    );
}
