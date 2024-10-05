import { ReactElement, ReactNode } from 'react';

import { Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import { Template } from 'components/_template/Template';

interface Props {
    breadcrumbs: ReactNode[];
}
export function BreadcrumbsCustom({ breadcrumbs }: Props): ReactElement {
    return (
        <Template>
            <Breadcrumbs
                separator={<NavigateNext fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Template>
    );
}
