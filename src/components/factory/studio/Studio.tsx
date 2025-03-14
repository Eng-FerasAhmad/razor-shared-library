import { ReactElement, useState } from 'react';

import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

import { CarouselView } from 'components/factory/studio/carousel-view/CarouselView';
import { MediaBarView } from 'components/factory/studio/media-bar-view/MediaBarView';
import { GridView } from 'components/factory/studio/fixed-grid-view/GridView';

import { StudioContainer, StudioHeader, ViewButton } from './styles';
import { StudioProps, ViewType } from './types';

export function Studio(props: StudioProps): ReactElement {
    const [view, setView] = useState<ViewType>('carousel');

    const hasMedia = props.media.length > 0;
    return (
        <StudioContainer>
            {hasMedia && (
                <>
                    <StudioHeader>
                        <ViewButton
                            onClick={() => setView('carousel')}
                            active={view === 'carousel'}
                        >
                            <ViewCarouselIcon sx={{ fontSize: 16 }} />
                        </ViewButton>
                        <ViewButton
                            onClick={() => setView('mediaBar')}
                            active={view === 'mediaBar'}
                        >
                            <ViewComfyIcon sx={{ fontSize: 16 }} />
                        </ViewButton>
                        <ViewButton
                            onClick={() => setView('fixedGrid')}
                            active={view === 'fixedGrid'}
                        >
                            <CalendarViewMonthIcon sx={{ fontSize: 16 }} />
                        </ViewButton>
                    </StudioHeader>

                    {view === 'carousel' && <CarouselView {...props} />}
                    {view === 'mediaBar' && <MediaBarView {...props} />}
                    {view === 'fixedGrid' && <GridView {...props} />}
                </>
            )}

            {!hasMedia && <div>No Media</div>}
        </StudioContainer>
    );
}
