import { ReactElement } from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';

import { Template } from 'components/_template/Template';

export function SkeletonCustom({ ...props }: SkeletonProps): ReactElement {
    return (
        <Template>
            <Skeleton {...props} />
        </Template>
    );
}
