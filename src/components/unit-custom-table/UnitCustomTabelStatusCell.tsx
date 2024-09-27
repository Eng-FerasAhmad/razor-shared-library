import { ReactElement } from 'react';
import { ChipCustom } from 'components/chip/Chip';
import { statusLabels } from 'components/unit-custom-table/types';
import { fontSize } from 'shared/fonts';
import { StandardColor } from 'shared/types';

interface Props {
    k: string;
    v: string;
}

export default function UnitCustomTableStatusCell({
    k,
    v,
}: Props): ReactElement {
    console.log('key', k);
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

    return <>{v}</>; // Renders value as plain text if not a status key
}
