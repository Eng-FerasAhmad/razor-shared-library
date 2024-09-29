import { ReactElement } from 'react';

import { SkeletonContainer } from './styles';

export function Skeleton(): ReactElement {
    return (
        <SkeletonContainer data-testid="skeleton">
            <>skeleton</>
        </SkeletonContainer>
    );
}
