import { ReactElement } from '../../../../../node_modules/react';
import { HeadCell } from '../../../../../../../../../src/components/factory/entity-table/types';
interface Props<T> {
    headCells: HeadCell<T>[];
    row: T;
}
export default function EntityTableCell<T>({ headCells, row, }: Props<T>): ReactElement;
export {};
