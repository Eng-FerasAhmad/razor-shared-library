import { ReactElement } from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';

export function SkeletonCustom({ ...props }: SkeletonProps): ReactElement {
    return <Skeleton {...props} />;
}
