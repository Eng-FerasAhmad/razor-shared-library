import { ReactElement } from 'react';

import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';

import { AlertCustom } from 'components/feedback/alert/Alert';
import { TableProps } from 'components/factory/entity-table/types';

export default function EntityTableEmptyRow<T>(
    props: TableProps<T>
): ReactElement {
    if (props.rows.length > 0) return <></>;

    return (
        <Box>
            <AlertCustom
                icon={<InfoOutlined fontSize={'small'} />}
                color="info"
                text={props.noDataCaption}
            />
        </Box>
    );
}
