import { Media } from 'components/factory/studio/types';

export const generateImageUrls = (count: number): Media[] => {
    return Array.from({ length: count }, (_, i) => ({
        alt: `Image ${i + 1}`,
        url: `https://picsum.photos/id/${i + 1}/800/500`,
        name: `Image_${i + 1}`,
        type: 'image',
        seq: i + 1,
    }));
};
