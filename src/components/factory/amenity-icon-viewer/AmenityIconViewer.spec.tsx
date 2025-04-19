import { AmenityIconViewer } from './AmenityIconViewer';

import { render, screen } from '@testing-library/react';

describe('AmenityIconViewer', () => {
    const icons = [
        { id: '1', name: 'Wifi', icon: <svg data-testid="WifiIcon" /> },
        { id: '2', name: 'Parking', icon: <svg data-testid="ParkingIcon" /> },
        { id: '3', name: 'Pool', icon: <svg data-testid="PoolIcon" /> },
    ];

    it('renders without crashing', () => {
        render(
            <AmenityIconViewer
                iconName={icons[0].name}
                size={20}
                color={'#ccc'}
            />
        );
        expect(screen.getByText('Wifi')).toBeInTheDocument();
        expect(screen.getByText('Parking')).toBeInTheDocument();
        expect(screen.getByText('Pool')).toBeInTheDocument();
    });

    it('displays each icon and its corresponding name', () => {
        render(
            <AmenityIconViewer
                iconName={icons[0].name}
                size={20}
                color={'#ccc'}
            />
        );

        icons.forEach((icon) => {
            expect(screen.getByText(icon.name)).toBeInTheDocument();
            expect(screen.getByTestId(`${icon.name}Icon`)).toBeInTheDocument();
        });
    });

    it('renders the correct structure for each icon item', () => {
        render(
            <AmenityIconViewer
                iconName={icons[0].name}
                size={20}
                color={'#ccc'}
            />
        );

        icons.forEach((icon) => {
            const iconBox = screen.getByText(icon.name).closest('div');
            expect(iconBox).toHaveStyle(`
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px;
                border-radius: 4px;
            `);
        });
    });
});
