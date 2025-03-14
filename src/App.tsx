import { ReactElement } from 'react';

import { Studio } from 'components/factory/studio/Studio';
import { generateImageUrls } from 'components/factory/studio/fixed-grid-view/utils';

export default function App(): ReactElement {
    const images = generateImageUrls(100);
    return (
        <div style={{ marginTop: '50px' }}>
            <Studio
                media={images}
                noMediaTitle={'No Media'}
                fullscreen={true}
                infoButton={true}
                buttonMore={'Show more'}
                buttonReset={'Reset'}
            />
        </div>
    );
}
