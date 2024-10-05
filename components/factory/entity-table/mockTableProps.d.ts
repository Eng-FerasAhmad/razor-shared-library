import { HeadCell } from '../../../../../../../../src/components/factory/entity-table/types';
export interface Data {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    statusText: string;
}
export declare const mockHeadCells: HeadCell<Data>[];
export declare const mockRows: Data[];
