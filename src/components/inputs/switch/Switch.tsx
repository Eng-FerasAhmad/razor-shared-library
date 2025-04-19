import { ReactElement } from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

import { StandardLabelPlacement } from 'shared/types';

interface Props {
    label?: string;
    labelPlacement?: StandardLabelPlacement;
}

export function SwitchCustom({
    label,
    labelPlacement,
    ...props
}: Props & SwitchProps): ReactElement {
    return (
        <FormControl component="fieldset" data-testid="switch">
            <FormControlLabel
                value="start"
                control={<Switch {...props} />}
                label={label}
                labelPlacement={labelPlacement}
            />
        </FormControl>
    );
}
