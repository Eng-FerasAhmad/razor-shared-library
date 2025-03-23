import { styled, Paper } from '@mui/material';

export const StyledPopperPaper = styled(Paper)(({ theme }) => ({
    borderRadius: 10,
    width: 280,
    boxShadow: theme.shadows[5],
    overflow: 'hidden',
}));
