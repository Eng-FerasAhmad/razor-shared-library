import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Props {
    title: string;
}

export default function TableToolbar({title}: Props): JSX.Element {
    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
            }}
        >
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {title}
                </Typography>
        </Toolbar>
    );
}
