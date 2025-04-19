import { ChangeEvent, ReactElement } from 'react';

import { Pagination } from '@mui/material';

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
    return <Pagination count={count} onChange={onChange} color={color} />;
}
