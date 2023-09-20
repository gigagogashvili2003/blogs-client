import { css, styled } from 'styled-components';
import { ICarouselArrow } from './Carousel.types';

export const CarouselContainer = styled.div`
    height: 100vh;
    padding: 100px 0;
`;

export const CarouselStyled = styled.div`
    position: relative;
    padding: 0 100px;

    .slick-slider {
        position: static;
    }

    .slick-next:before,
    .slick-prev:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .slick-next:before {
        content: url('/src/assets/images/arrow-right.png');
    }

    .slick-prev:before {
        content: url('/src/assets/images/arrow-left.png');
    }

    .slick-next:hover,
    .slick-prev:hover {
        background: white;
    }
`;
export const CarouselImage = styled.img`
    /* max-height: 225px; */
    width: 100%;
    height: 100%;
`;

export const CarouselItemTitle = styled.h4`
    text-align: center;
    color: #111210;
    font-size: 24px;
    font-weight: 600;
    line-height: 58px;
`;

export const CarouselItem = styled.div``;

export const CarouselTitle = styled.h3`
    color: ${(p) => p.theme.BLACK_COLOR};
    font-size: 36px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.225px;
    margin-bottom: 32px;
`;

export const CarouselArrow = styled.div<ICarouselArrow>`
    position: absolute;
    height: 150px;
    max-width: 60px;
    width: 100%;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.08));
    background-color: ${(p) => p.theme.WHITE_COLOR};
    border-radius: 10px;

    ${({ right }) =>
        right &&
        css`
            right: ${right};
        `}
    ${({ left }) =>
        left &&
        css`
            left: ${left};
        `}
`;
