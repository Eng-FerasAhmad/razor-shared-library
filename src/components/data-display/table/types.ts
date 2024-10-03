export interface TableColumns<T> {
    id: keyof T;
    label: string;
    align?: 'left' | 'right' | 'center';
}
