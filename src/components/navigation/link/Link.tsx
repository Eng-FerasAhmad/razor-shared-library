import { ReactElement } from 'react';

import { Link } from '@mui/material';

interface Props {
    text: string;
}

export function LinkCustom({ text }: Props): ReactElement {
    return (
        <Link href="#" underline="hover">
            {text}
        </Link>
    );
}
