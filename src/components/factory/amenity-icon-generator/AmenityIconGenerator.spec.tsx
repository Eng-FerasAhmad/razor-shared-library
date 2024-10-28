import { ReactNode } from 'react';

import { AmenityIconGenerator } from './AmenityIconGenerator';

import { render, screen } from '@testing-library/react';

jest.mock('components/_template/Template', () => ({
    Template: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

jest.mock('components/factory/amenity-icons/iconList', () => ({
    amenityOptionsMap: {
        Wifi: <svg data-testid="WifiIcon" />,
        LocalParking: <svg data-testid="LocalParkingIcon" />,
        Pool: <svg data-testid="PoolIcon" />,
    },
}));

describe('AmenityIconGenerator', () => {
    it('renders the correct icon when a valid iconName is provided', () => {
        render(<AmenityIconGenerator iconName="Wifi" />);
        expect(screen.getByTestId('WifiIcon')).toBeInTheDocument();
    });

    it('renders null when an invalid iconName is provided', () => {
        const { container } = render(
            <AmenityIconGenerator iconName="InvalidIconName" />
        );
        expect(container.firstChild).toBeNull();
    });
});
