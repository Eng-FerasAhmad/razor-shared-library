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
    noMediaTitle: string;
    buttonMore: string;
    defaultView?: ViewType;
}
