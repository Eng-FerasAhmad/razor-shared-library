import { ReactElement } from 'react';

import { SvgIconProps } from '@mui/material';

import { amenityOptions } from 'components/factory/amenity-icons/iconList';

interface Props {
    iconName: string;
    size?: number;
    color?: string;
}

export function AmenityIconViewer({
    iconName,
    size,
    color,
}: Props): ReactElement {
    const matched = amenityOptions.find((opt) => opt.value === iconName);

    if (!matched) return <></>;

    const props: SvgIconProps = {
        fontSize: size ? 'inherit' : 'medium',
        sx: { fontSize: size, color },
    };

    return matched.icon(props);
}
