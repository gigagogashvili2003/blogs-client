import { css, styled } from 'styled-components';
import { IFlex } from './Flex.types';

export const Flex = styled.div<IFlex>`
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    display: flex;
    flex-direction: ${(p) => p.$direction || 'row'};
    flex-wrap: ${(p) => p.$wrap || 'nowrap'};
    align-items: ${(p) => p.$align || 'stretch'};
    justify-content: ${(p) => p.$justify || 'flex-start'};

    ${({ $columnGap }) =>
        $columnGap &&
        css`
            column-gap: ${$columnGap};
        `}

    ${({ $rowGap }) =>
        $rowGap &&
        css`
            row-gap: ${$rowGap};
        `}
    ${({ $gap }) =>
        $gap &&
        css`
            row-gap: ${$gap};
        `}
`;
