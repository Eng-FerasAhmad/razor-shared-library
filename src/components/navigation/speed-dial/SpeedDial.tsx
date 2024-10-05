import { ReactElement, ReactNode } from 'react';

import Box from '@mui/material/Box';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import { Template } from 'components/_template/Template';
import { SpeedDialActionType } from 'components/navigation/speed-dial/types';

interface Props {
    actions: SpeedDialActionType[];
    icon?: ReactNode;
    ariaLabel: string;
    position?: {
        bottom?: number;
        right?: number;
        left?: number;
        top?: number;
    };
}

export function SpeedDialCustom({
    actions,
    icon = <SpeedDialIcon />,
    ariaLabel,
    position = { bottom: 16, right: 16 },
}: Props): ReactElement {
    return (
        <Template>
            <Box
                sx={{
                    height: 320,
                    transform: 'translateZ(0px)',
                    flexGrow: 1,
                    position: 'absolute',
                    ...position,
                }}
            >
                <SpeedDial
                    ariaLabel={ariaLabel}
                    icon={icon}
                    data-testid={'speed-dial'}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            data-testid={'speed-dial-action'}
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Template>
    );
}
