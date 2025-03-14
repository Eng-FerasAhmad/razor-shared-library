import { ReactNode } from 'react';

export type ViewType = 'carousel' | 'mediaBar' | 'fixedGrid';
export type MediaType = 'image' | 'video';

export interface Media {
    alt: string;
    url: string;
    name?: string;
    type?: MediaType;
    seq?: number;
}

export interface StudioProps {
    media: Media[];
    viewsPanel?: boolean;
    infoButton?: boolean;
    fullscreen?: boolean;
    controlPanel?: ReactNode;
    noMediaTitle: string;
    buttonMore: string;
    buttonReset: string;
}
