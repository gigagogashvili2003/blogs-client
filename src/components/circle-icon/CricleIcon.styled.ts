import { css, styled } from 'styled-components';
import { ICircleIcon } from './CircleIcon.types';

export const CircleIconStyled = styled.div<ICircleIcon>`
    width: ${(p) => p.width || '20px'};
    height: ${(p) => p.height || '20px'};
    border-radius: 50%;
    background-color: ${(p) => p.backgroundColor || 'white'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ active, activeBackgroundColor }) =>
        active &&
        css`
            background-color: ${activeBackgroundColor || '#FF5480'};
        `}
`;
