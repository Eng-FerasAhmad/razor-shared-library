import { ReactElement } from 'react';
import { ChipCustom } from 'components/chip/Chip';
import { StandardColor, statusLabels } from 'components/table/types';
import { fontSize } from 'shared/fonts.ts';

interface Props {
    status: string;
}

export default function TabelCellStatus({ status }: Props): ReactElement {
    const color = (): StandardColor => {
        switch (status) {
            case statusLabels.active:
                return 'primary';
            case statusLabels.blocked:
                return 'secondary';
            case statusLabels.canceled:
                return 'secondary';
            case statusLabels.completed:
                return 'secondary';
            case statusLabels.deleted:
                return 'error';
            case statusLabels.expired:
                return 'warning';
            case statusLabels.inactive:
                return 'secondary';
            case statusLabels.pending:
                return 'secondary';
            case statusLabels.rejected:
                return 'error';
            default:
                return 'primary';
        }
    };

    return (
        <ChipCustom
            label={status}
            variant={'filled'}
            color={color()}
            sx={{ height: '25px', fontSize: fontSize.font12 }}
        />
    );
}
