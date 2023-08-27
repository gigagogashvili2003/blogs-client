import { styled } from 'styled-components';

export const NewPostStyled = styled.div`
    max-width: 450px;
    width: 100%;
    cursor: pointer;
`;

export const NewPostImageBlock = styled.div`
    width: 100%;
    img {
        width: 100%;
    }
`;

export const AuthorBlock = styled.div`
    margin-top: 15px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;

    color: ${(p) => p.theme.BLACK_COLOR};

    .prefix,
    .suffix {
        color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    }
`;

export const NewPostTitleBlock = styled.div`
    font-size: 25px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.175px;
    color: ${(p) => p.theme.DEFAULT_FONT_COLOR};
    margin-bottom: 10px;
`;
export const NewPostDescriptionBlock = styled.div`
    font-size: 16px;
    color: ${(p) => p.theme.SECONDARY_TEXT_COLOR};
    line-height: 28px;
`;
