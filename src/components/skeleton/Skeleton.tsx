import { SkeletonContainer } from './styles';

export function Skeleton(): JSX.Element {
    return (
        <SkeletonContainer data-testid="skeleton">
            <>skeleton</>
        </SkeletonContainer>
    );
}
