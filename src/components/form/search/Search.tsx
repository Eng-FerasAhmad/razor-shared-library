import IconButton from '@mui/material/IconButton';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';

interface Props {
    icon: ReactNode;
    submitHandler: () => void;
}

export function SearchCustom({
    icon,
    submitHandler,
    ...props
}: Props & InputBaseProps): JSX.Element {
    const clickSubmitHandler = (
        e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
    ): void => {
        e.preventDefault();
        submitHandler();
    };

    return (
        <Paper
            variant="outlined"
            component="form"
            sx={{
                p: '4px 2px 0px 0px',
                display: 'flex',
                alignItems: 'center',
                height: 40,
            }}
            onSubmit={clickSubmitHandler}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                {...props}
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={clickSubmitHandler}
            >
                {icon}
            </IconButton>
        </Paper>
    );
}
