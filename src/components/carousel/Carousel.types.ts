import { Settings } from 'react-slick';

export interface ICarouselItem {
    imageSrc: string;
    title?: string;
}

export type ICarouselItems = Array<ICarouselItem>;
export type USwipeDirections = 'left' | 'right';

export interface ICarousel extends Settings {
    items: ICarouselItems;
}

export interface ICarouselArrow {
    right?: string;
    left?: string;
}
