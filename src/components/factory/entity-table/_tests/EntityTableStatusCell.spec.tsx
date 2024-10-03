import { statusLabels } from 'components/factory/entity-table/types';
import UnitCustomTableStatusCell from 'components/factory/entity-table/EntityTableStatusCell';

import { render, screen } from '@testing-library/react';

describe('UnitCustomTableStatusCell', () => {
    it('renders a ChipCustom for status with active label', () => {
        render(
            <UnitCustomTableStatusCell k="status" v={statusLabels.active} />
        );

        const chip = screen.getByText(statusLabels.active);
        expect(chip).toBeInTheDocument();
    });

    it('renders a ChipCustom for status with deleted label', () => {
        render(
            <UnitCustomTableStatusCell k="status" v={statusLabels.deleted} />
        );

        const chip = screen.getByText(statusLabels.deleted);
        expect(chip).toBeInTheDocument();
    });

    it('renders plain text for non-status keys', () => {
        render(<UnitCustomTableStatusCell k="otherKey" v="Some text" />);

        expect(screen.getByText('Some text')).toBeInTheDocument();
    });
});
