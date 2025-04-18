import { ReactElement } from 'react';

import { SvgIconProps } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PetsIcon from '@mui/icons-material/Pets';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ElevatorIcon from '@mui/icons-material/Elevator';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BalconyIcon from '@mui/icons-material/Balcony';
import AccessibleIcon from '@mui/icons-material/Accessible';

export interface AutoCompleteOptions {
    value: string;
    label: string;
    icon: (props: SvgIconProps) => ReactElement;
}

export const amenityOptions: AutoCompleteOptions[] = [
    {
        value: 'AccessibleIcon',
        label: 'Accessible',
        icon: (props) => <AccessibleIcon {...props} />,
    },
    {
        value: 'LocalParkingIcon',
        label: 'Parking',
        icon: (props) => <LocalParkingIcon {...props} />,
    },
    {
        value: 'WifiIcon',
        label: 'Wi-Fi',
        icon: (props) => <WifiIcon {...props} />,
    },
    {
        value: 'PoolIcon',
        label: 'Swimming Pool',
        icon: (props) => <PoolIcon {...props} />,
    },
    {
        value: 'FitnessCenterIcon',
        label: 'Gym',
        icon: (props) => <FitnessCenterIcon {...props} />,
    },
    {
        value: 'RestaurantIcon',
        label: 'Restaurant',
        icon: (props) => <RestaurantIcon {...props} />,
    },
    { value: 'SpaIcon', label: 'Spa', icon: (props) => <SpaIcon {...props} /> },
    {
        value: 'SmokeFreeIcon',
        label: 'Non-Smoking',
        icon: (props) => <SmokeFreeIcon {...props} />,
    },
    {
        value: 'AcUnitIcon',
        label: 'Air Conditioning',
        icon: (props) => <AcUnitIcon {...props} />,
    },
    {
        value: 'FreeBreakfastIcon',
        label: 'Free Breakfast',
        icon: (props) => <FreeBreakfastIcon {...props} />,
    },
    {
        value: 'PetsIcon',
        label: 'Pet Friendly',
        icon: (props) => <PetsIcon {...props} />,
    },
    {
        value: 'LocalLaundryServiceIcon',
        label: 'Laundry Service',
        icon: (props) => <LocalLaundryServiceIcon {...props} />,
    },
    {
        value: 'AirportShuttleIcon',
        label: 'Shuttle Service',
        icon: (props) => <AirportShuttleIcon {...props} />,
    },
    {
        value: 'ChildCareIcon',
        label: 'Childcare',
        icon: (props) => <ChildCareIcon {...props} />,
    },
    {
        value: 'BathtubIcon',
        label: 'Bathtub',
        icon: (props) => <BathtubIcon {...props} />,
    },
    {
        value: 'ElevatorIcon',
        label: 'Elevator',
        icon: (props) => <ElevatorIcon {...props} />,
    },
    {
        value: 'RoomServiceIcon',
        label: 'Room Service',
        icon: (props) => <RoomServiceIcon {...props} />,
    },
    {
        value: 'LocalBarIcon',
        label: 'Bar',
        icon: (props) => <LocalBarIcon {...props} />,
    },
    {
        value: 'KitchenIcon',
        label: 'Kitchen',
        icon: (props) => <KitchenIcon {...props} />,
    },
    {
        value: 'BalconyIcon',
        label: 'Balcony',
        icon: (props) => <BalconyIcon {...props} />,
    },
];
