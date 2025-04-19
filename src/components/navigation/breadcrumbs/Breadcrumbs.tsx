import { ReactElement, ReactNode } from 'react';

import { Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

interface Props {
    breadcrumbs: ReactNode[];
}
export function BreadcrumbsCustom({ breadcrumbs }: Props): ReactElement {
    return (
        <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
    );
}
