import { cloneElement, ReactElement } from 'react';

import { amenityOptionsMap } from 'components/factory/amenity-icons/iconList';
import { Template } from 'components/_template/Template';

interface Props {
    iconName: string;
    size?: 'small' | 'medium' | 'large';
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'action'
        | 'error'
        | 'disabled';
}

export function AmenityIconGenerator({
    iconName,
    size = 'medium',
    color = 'inherit',
}: Props): ReactElement | null {
    const IconComponent = amenityOptionsMap[iconName];

    if (!IconComponent) {
        return null;
    }

    return (
        <Template>
            {cloneElement(IconComponent, { fontSize: size, color })}
        </Template>
    );
}
