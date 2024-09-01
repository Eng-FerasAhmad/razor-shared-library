import { AlertCustom } from 'src/components/alert/Alert';
import { ReactElement } from 'react';

interface Props {
    caption: string;
}
export default function TableEmptyRow(props: Props): ReactElement {
    return (
        <caption>
            <AlertCustom color="info" text={props.caption} />
        </caption>
    );
}
