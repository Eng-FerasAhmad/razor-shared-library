import { ReactElement, useState } from 'react';

import { Box, IconButton, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { color, RazorBrandColor } from 'shared/color';
import { CarouselItem } from 'components/surfaces/carousel/types';

interface Props {
    items: CarouselItem[];
    borderRadius?: number;
}

export function Carousel({ items, borderRadius }: Props): ReactElement {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = items.length;

    const handleNext = () => {
        setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                margin: 'auto',
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            data-testid={'carousel'}
        >
            <Paper
                square
                elevation={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: borderRadius ? `${borderRadius}px` : '10px',
                    position: 'relative',
                    width: '100%',
                    minWidth: '450px',
                    overflow: 'hidden',
                }}
                data-testid={'carousel-content'}
            >
                {items[activeStep].content}
            </Paper>

            <Box data-testid={'carousel-navigation'}>
                <IconButton
                    onClick={handleBack}
                    data-testid={'carousel-button-back'}
                    sx={{
                        transform: 'translateY(50%)',
                        backgroundColor: '#fff',
                        border: `1px solid ${color.primary.main}`,
                        color: ` ${color.primary.main}`,
                        margin: '0 10px',
                        '&:hover': {
                            backgroundColor: RazorBrandColor.green.light,
                            border: `1px solid ${RazorBrandColor.green.primary}`,
                        },
                    }}
                >
                    <ArrowBackIosNewIcon fontSize={'small'} />
                </IconButton>

                <IconButton
                    onClick={handleNext}
                    data-testid={'carousel-button-next'}
                    sx={{
                        transform: 'translateY(50%)',
                        backgroundColor: '#fff',
                        border: `1px solid ${color.primary.main}`,
                        color: ` ${color.primary.main}`,
                        margin: '0 10px',
                        '&:hover': {
                            backgroundColor: RazorBrandColor.green.light,
                            border: `1px solid ${RazorBrandColor.green.primary}`,
                        },
                    }}
                >
                    <ArrowForwardIosIcon fontSize={'small'} />
                </IconButton>
            </Box>
        </Box>
    );
}
