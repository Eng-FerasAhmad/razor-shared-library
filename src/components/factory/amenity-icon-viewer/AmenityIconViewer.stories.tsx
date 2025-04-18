import { Meta, StoryObj } from '@storybook/react';

import { AmenityIconViewer } from './AmenityIconViewer';

const meta: Meta<typeof AmenityIconViewer> = {
    title: 'Factory/Amenity Icon Viewer',
    component: AmenityIconViewer,
    tags: ['autodocs'],
    argTypes: {
        iconName: {
            control: {
                type: 'select',
                options: [
                    'AccessibleIcon',
                    'LocalParkingIcon',
                    'WifiIcon',
                    'PoolIcon',
                    'FitnessCenterIcon',
                    'RestaurantIcon',
                    'SpaIcon',
                    'SmokeFreeIcon',
                    'AcUnitIcon',
                    'FreeBreakfastIcon',
                    'PetsIcon',
                    'LocalLaundryServiceIcon',
                    'AirportShuttleIcon',
                    'ChildCareIcon',
                    'BathtubIcon',
                    'ElevatorIcon',
                    'RoomServiceIcon',
                    'LocalBarIcon',
                    'KitchenIcon',
                    'BalconyIcon',
                ],
            },
        },
        size: {
            control: {
                type: 'number',
            },
        },
        color: {
            control: 'color',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AmenityIconViewer>;

export const Default: Story = {
    args: {
        iconName: 'LocalParkingIcon',
        size: 40,
        color: '#1976d2',
    },
};
