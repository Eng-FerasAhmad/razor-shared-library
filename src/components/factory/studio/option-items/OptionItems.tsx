import { ReactElement } from 'react';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Tooltip from '@mui/material/Tooltip';

import { StudioInfo, ViewButton } from 'components/factory/studio/styles';

interface Props {
    infoButton?: boolean;
    fullscreen?: boolean;
    onFullscreen?: () => void;
    info: string;
}

export default function OptionItems(props: Props): ReactElement {
    return (
        <StudioInfo>
            {props.infoButton && (
                <ViewButton onClick={() => console.log('')} active={false}>
                    <Tooltip title={props.info}>
                        <HelpOutlineIcon sx={{ fontSize: 20 }} />
                    </Tooltip>
                </ViewButton>
            )}
            {props.fullscreen && (
                <ViewButton onClick={props.onFullscreen} active={false}>
                    <FullscreenIcon sx={{ fontSize: 20 }} />
                </ViewButton>
            )}
        </StudioInfo>
    );
}
