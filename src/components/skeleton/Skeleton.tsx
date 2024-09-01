import { SkeletonContainer } from './styles';
import { ReactElement } from 'react';

export function Skeleton(): ReactElement {
    return (
        <SkeletonContainer data-testid="skeleton">
            <>skeleton</>
        </SkeletonContainer>
    );
}
