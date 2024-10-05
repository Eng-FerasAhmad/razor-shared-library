import { ChangeEvent, ReactElement } from '../../../../node_modules/react';
interface Props {
    count: number;
    onChange: (event: ChangeEvent<unknown>, value: number) => void;
    color?: 'primary' | 'secondary';
}
export declare function PaginationCustom({ count, onChange, color, }: Props): ReactElement;
export {};
