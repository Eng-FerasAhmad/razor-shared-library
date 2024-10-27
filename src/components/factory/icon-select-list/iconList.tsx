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

import { AutoCompleteOptions } from 'components/inputs/auto-complete/types';

export const amenityOptions: AutoCompleteOptions[] = [
    { value: 'AccessibleIcon', label: 'Accessible', icon: <AccessibleIcon /> },
    { value: 'LocalParkingIcon', label: 'Parking', icon: <LocalParkingIcon /> },
    { value: 'WifiIcon', label: 'Wi-Fi', icon: <WifiIcon /> },
    { value: 'PoolIcon', label: 'Swimming Pool', icon: <PoolIcon /> },
    { value: 'FitnessCenterIcon', label: 'Gym', icon: <FitnessCenterIcon /> },
    { value: 'RestaurantIcon', label: 'Restaurant', icon: <RestaurantIcon /> },
    { value: 'SpaIcon', label: 'Spa', icon: <SpaIcon /> },
    { value: 'SmokeFreeIcon', label: 'Non-Smoking', icon: <SmokeFreeIcon /> },
    { value: 'AcUnitIcon', label: 'Air Conditioning', icon: <AcUnitIcon /> },
    {
        value: 'FreeBreakfastIcon',
        label: 'Free Breakfast',
        icon: <FreeBreakfastIcon />,
    },
    { value: 'PetsIcon', label: 'Pet Friendly', icon: <PetsIcon /> },
    {
        value: 'LocalLaundryServiceIcon',
        label: 'Laundry Service',
        icon: <LocalLaundryServiceIcon />,
    },
    {
        value: 'AirportShuttleIcon',
        label: 'Shuttle Service',
        icon: <AirportShuttleIcon />,
    },
    { value: 'ChildCareIcon', label: 'Childcare', icon: <ChildCareIcon /> },
    { value: 'BathtubIcon', label: 'Bathtub', icon: <BathtubIcon /> },
    { value: 'ElevatorIcon', label: 'Elevator', icon: <ElevatorIcon /> },
    {
        value: 'RoomServiceIcon',
        label: 'Room Service',
        icon: <RoomServiceIcon />,
    },
    { value: 'LocalBarIcon', label: 'Bar', icon: <LocalBarIcon /> },
    { value: 'KitchenIcon', label: 'Kitchen', icon: <KitchenIcon /> },
    { value: 'BalconyIcon', label: 'Balcony', icon: <BalconyIcon /> },
];
