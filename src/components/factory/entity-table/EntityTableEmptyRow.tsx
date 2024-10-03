import { ReactElement } from 'react';

import InfoOutlined from '@mui/icons-material/InfoOutlined';

import { AlertCustom } from 'components/feedback/alert/Alert';

interface Props {
    caption: string;
}
export default function EntityTableEmptyRow(props: Props): ReactElement {
    return (
        <table>
            <caption>
                <AlertCustom
                    icon={<InfoOutlined fontSize={'small'} />}
                    color="info"
                    text={props.caption}
                />
            </caption>
        </table>
    );
}
