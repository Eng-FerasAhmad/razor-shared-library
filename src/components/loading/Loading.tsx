import Backdrop, { BackdropProps } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Template } from '../_template/Template';

export function Loading({...props}: BackdropProps) {

  return (
    <Template>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        {...props}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Template>
  );
}
