import { EntityTable } from 'components/factory/entity-table/EntityTable';
import {
    mockHeadCells,
    mockRows,
} from 'components/factory/entity-table/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EntityTable> = {
    component: EntityTable,
    title: 'Factory/Entity Table',
    tags: ['autodocs'],
    argTypes: {
        rows: {
            control: { type: 'object' },
            description: 'Data rows to display in the table',
        },
        headerTools: {
            control: { type: 'object' },
            description: 'Tools to display in the table toolbar',
        },
        noDataCaption: {
            control: { type: 'text' },
            description: 'Caption to show when there are no data rows',
        },
    },
};

export default meta;

type Story = StoryObj<typeof EntityTable>;

export const Default: Story = {
    render: () => {
        //const [rows, setRows] = useState(sampleRows); // State to manage table rows

        const props = {
            totalResultCounts: 100,
            pageSize: 10,
            pageNumber: 0,
            handleChangePage: () => console.log(''),
            handleChangeRowsPerPage: () => console.log(''),
            rows: mockRows,
            headCells: mockHeadCells,
            headerTools: <>Title</>,
            selectedRow: -1,
            noDataCaption: 'No data available',
            orderBy: '',
            order: 'asc' as Order,
            resetSort: () => console.log(''),
            handleHeaderClick: () => console.log(''),
        };

        return <EntityTable {...props} />;
    },
};

export const NoData: Story = {
    render: () => {
        const props = {
            totalResultCounts: 100,
            pageSize: 10,
            pageNumber: 0,
            handleChangePage: () => console.log(''),
            handleChangeRowsPerPage: () => console.log(''),
            rows: [],
            headCells: mockHeadCells,
            headerTools: <>Title</>,
            selectedRow: -1,
            noDataCaption: 'No data available',
            orderBy: '',
            order: 'asc' as Order,
            resetSort: () => console.log(''),
            handleHeaderClick: () => console.log(''),
        };

        return <EntityTable {...props} />;
    },
};
