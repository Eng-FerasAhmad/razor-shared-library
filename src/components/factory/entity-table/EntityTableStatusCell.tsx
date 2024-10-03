import { ReactElement } from 'react';

import { ChipCustom } from 'components/data-display/chip/Chip';
import { statusLabels } from 'components/factory/entity-table/types';
import { fontSize } from 'shared/fonts';
import { StandardColor } from 'shared/types';

interface Props {
    k: string;
    v: string;
}

export default function EntityTableStatusCell({ k, v }: Props): ReactElement {
    if (k === 'status' || k === 'statusText') {
        const getColor = (): StandardColor => {
            switch (v) {
                case statusLabels.active:
                    return 'primary';
                case statusLabels.deleted:
                case statusLabels.rejected:
                    return 'error';
                case statusLabels.expired:
                    return 'warning';
                default:
                    return 'secondary';
            }
        };

        return (
            <ChipCustom
                label={v}
                variant="filled"
                color={getColor()}
                sx={{ height: '25px', fontSize: fontSize.font12 }}
            />
        );
    }

    return <>{v}</>;
}
