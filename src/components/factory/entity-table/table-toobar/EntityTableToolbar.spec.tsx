import EntityTableToolbar from 'components/factory/entity-table/table-toobar/EntityTableToolbar';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('EntityTableToolbar', () => {
    it('renders with header tools', () => {
        render(<EntityTableToolbar headerTools={<span>Tool 1</span>} />);

        const toolbar = screen.getByTestId('entity-table-toolbar');
        expect(toolbar).toBeInTheDocument();

        const headerTools = screen.getByText('Tool 1');
        expect(headerTools).toBeInTheDocument();
    });

    it('renders without header tools', () => {
        render(<EntityTableToolbar headerTools={null} />);

        const toolbar = screen.getByTestId('entity-table-toolbar');
        expect(toolbar).toBeInTheDocument();
    });
});
