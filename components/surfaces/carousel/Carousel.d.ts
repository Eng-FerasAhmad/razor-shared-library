import { ReactElement } from '../../../../node_modules/react';
import { CarouselItem } from '../../../../../../../../src/components/surfaces/carousel/types';
interface Props {
    items: CarouselItem[];
    borderRadius?: number;
}
export declare function Carousel({ items, borderRadius }: Props): ReactElement;
export {};
