import { AlertCustom } from 'src/components/alert/Alert';

interface Props {
    caption: string;
}
export default function TableEmptyRow(props: Props): JSX.Element {
    return (
        <caption>
            <AlertCustom color="info" text={props.caption} />
        </caption>
    );
}
