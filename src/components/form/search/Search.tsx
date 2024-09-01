import IconButton from '@mui/material/IconButton';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
    searchIcon: ReactNode;
    clearIcon: ReactNode;
    submitHandler: () => void;
    clearHandler: () => void;
}

export function SearchCustom({
    searchIcon,
    clearIcon,
    submitHandler,
    clearHandler,
    ...props
}: Props & InputBaseProps): ReactElement {
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
                onClick={clearHandler}
            >
                {clearIcon}
            </IconButton>
            <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={clickSubmitHandler}
            >
                {searchIcon}
            </IconButton>
        </Paper>
    );
}
