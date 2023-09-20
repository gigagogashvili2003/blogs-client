import { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { FC } from '@/types';
import { ICarousel, USwipeDirections } from './Carousel.types';
import {
    CarouselArrow,
    CarouselContainer,
    CarouselImage,
    CarouselItem,
    CarouselItemTitle,
    CarouselStyled,
    CarouselTitle,
} from './Carousel.styled';
const CarouselComponent: FC<ICarousel> = (props) => {
    const { items, slidesToShow = 5, ...rest } = props;

    const [page, setPage] = useState(1);
    const [slide, setSlide] = useState<number>(slidesToShow);

    const settings = useMemo<Settings>(() => {
        return {
            arrows: true,
            autoplay: false,
            nextArrow: <CarouselArrow right="0" />,
            prevArrow: <CarouselArrow left="0" />,
            infinite: false,
            focusOnSelect: false,
            slidesToShow: slidesToShow,
            onSwipe: (swipeDirection: USwipeDirections) => onSwipeHandler(swipeDirection),
            afterChange: (currentSlide: number) => afterChangeHandler(currentSlide),
            ...rest,
        };
    }, []);

    const onSwipeHandler = (swipeDirection: USwipeDirections) => {};
    const afterChangeHandler = (currentSlide: number) => {
        setSlide((prevSlide) => prevSlide + slidesToShow);
        setPage((prevPage) => prevPage + 1);
    };

    console.log(slide, page);

    return (
        <CarouselContainer>
            <CarouselTitle>Reading lists</CarouselTitle>
            <CarouselStyled>
                <Slider {...settings}>
                    {items?.map((item, i) => (
                        <CarouselItem key={i}>
                            <CarouselImage src={item.imageSrc} alt={item.title} />
                            {item?.title && <CarouselItemTitle>{item.title}</CarouselItemTitle>}
                        </CarouselItem>
                    ))}
                </Slider>
            </CarouselStyled>
        </CarouselContainer>
    );
};

export default CarouselComponent;
