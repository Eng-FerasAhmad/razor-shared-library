import { ReactElement, useState } from 'react';

import { AutoCompleteOptions } from 'components/inputs/auto-complete/types';
import { IconSelectList } from 'components/factory/icon-select-list/IconSelectList';
import { amenityOptions } from 'components/factory/icon-select-list/iconList';

export default function App(): ReactElement {
    const [selectedAmenity, setSelectedAmenity] =
        useState<AutoCompleteOptions | null>(null);

    const handleAmenityChange = (selected: AutoCompleteOptions | null) => {
        setSelectedAmenity(selected);
        if (selected) {
            console.log('Selected Amenity:', selected.label);
        } else {
            console.log('No Amenity Selected');
        }
    };

    return (
        <div>
            <h1>Select an Amenity</h1>
            <IconSelectList
                options={amenityOptions}
                label="Amenities"
                value={selectedAmenity}
                onChange={handleAmenityChange}
            />
            {selectedAmenity && (
                <div style={{ marginTop: '20px' }}>
                    <p>
                        <strong>Selected Amenity:</strong>{' '}
                        {selectedAmenity.label}
                    </p>
                </div>
            )}
        </div>
    );
}
