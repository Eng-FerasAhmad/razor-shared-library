interface GenericTableProps<T> {
    columns: {
        id: keyof T;
        label: string;
        align?: 'left' | 'center' | 'right';
    }[];
    data: T[];
}
export declare const TableCustom: <T extends object>({ columns, data, }: GenericTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
