import { ChangeEvent, ReactElement } from 'react';

import { Pagination } from '@mui/material';

import { Template } from 'components/_template/Template';

interface Props {
    count: number;
    onChange: (event: ChangeEvent<unknown>, value: number) => void;
    color?: 'primary' | 'secondary';
}

export function PaginationCustom({
    count,
    onChange,
    color = 'primary',
}: Props): ReactElement {
    return (
        <Template>
            <Pagination count={count} onChange={onChange} color={color} />
        </Template>
    );
}
