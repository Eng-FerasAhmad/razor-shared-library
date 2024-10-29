import React, { useState } from 'react';

import { Menu, MenuItem, Button, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { color } from 'shared/color';
import { Template } from 'components/_template/Template';

type Language = {
    lang: string;
    nativeName: string;
};

interface Props {
    languages: Language[];
    defaultLanguage: string;
    onSelect: (short: string) => void;
}

export function LanguageSwitch({
    languages,
    defaultLanguage,
    onSelect,
}: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] =
        useState<string>(defaultLanguage);

    const flagMap: Record<string, string> = {
        GB: '🇬🇧',
        DE: '🇩🇪',
        FR: '🇫🇷',
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (short: string) => {
        setSelectedLanguage(short);
        onSelect(short);
        handleClose();
    };

    const selectedLang = languages.find(
        (lang) => lang.lang === selectedLanguage
    );

    return (
        <Template>
            <Box
                sx={{
                    display: 'inline-block',
                    borderRadius: '8px',
                    transition: 'border 0.3s',
                    border: '1px solid #fff',
                    '&:hover': {
                        border: '1px solid #ccc',
                    },
                }}
            >
                <Button
                    onClick={handleClick}
                    sx={{ textTransform: 'none', color: 'black' }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.borderLight,
                            color: 'white',
                            fontSize: 16,
                            mr: 1,
                        }}
                    >
                        {flagMap[selectedLanguage]}
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{ marginRight: '4px', minWidth: '60px' }}
                    >
                        {selectedLang?.nativeName || 'Select Language'}
                    </Typography>
                    <ExpandMoreIcon
                        sx={{
                            transition: 'transform 0.5s',
                            transform: anchorEl
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                        }}
                    />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {languages.map(({ nativeName, lang }) => (
                        <MenuItem key={lang} onClick={() => handleSelect(lang)}>
                            <Box component="span" sx={{ mr: 1 }}>
                                {flagMap[lang] || '🏳️'}
                            </Box>
                            {nativeName}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Template>
    );
}
