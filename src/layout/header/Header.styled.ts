import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 0 12%;
    background-color: ${(p) => p.theme.WHITE_COLOR};
    z-index: 5;
`;

export const Navigation = styled.nav`
    flex: 2;
`;

export const SocialMediaContainer = styled.div`
    flex: 1;
`;

export const Logo = styled.div`
    flex: 1;
`;

export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLi = styled.li`
    a {
        padding: 10px;
        border-radius: 10px;
        color: ${(p) => p.theme.BLACK_COLOR};
    }

    .active {
        color: ${(p) => p.theme.WHITE_COLOR};
        background-color: ${(p) => p.theme.ACTIVE_BG_COLOR};
    }
`;
