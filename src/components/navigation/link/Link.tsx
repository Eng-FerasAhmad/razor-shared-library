import { ReactElement } from 'react';

import { Link } from '@mui/material';

import { Template } from 'components/_template/Template';

interface Props {
    text: string;
}

export function LinkCustom({ text }: Props): ReactElement {
    return (
        <Template>
            <Link href="#" underline="hover">
                {text}
            </Link>
        </Template>
    );
}
