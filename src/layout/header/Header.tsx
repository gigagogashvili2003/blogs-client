import CircleIcon from '@/components/circle-icon/CircleIcon';
import { HeaderStyled, Logo, NavLi, NavUl, Navigation, SocialMediaContainer } from './Header.styled';
import { socialMediaData } from '@/data';
import { Flex } from '@/components/flex/Flex.styled';
import LogoImage from '@/assets/images/logo-dark.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const activeHandler = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'active' : '';
    };

    return (
        <HeaderStyled>
            <Flex $align="center" $justify="space-between" height="100%">
                <Logo>
                    <img src={LogoImage} />
                </Logo>
                <Navigation>
                    <NavUl>
                        <NavLi>
                            <NavLink className={activeHandler} to={'/user/profile'}>
                                Popular
                            </NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink className={activeHandler} to={'/new'}>
                                New
                            </NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink className={activeHandler} to={'/topics'}>
                                Topics
                            </NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink className={activeHandler} to={'/subscribe'}>
                                Subscribe
                            </NavLink>
                        </NavLi>
                        <NavLi>
                            <NavLink className={activeHandler} to={'/sign-up'}>
                                Sign Up
                            </NavLink>
                        </NavLi>
                    </NavUl>
                </Navigation>
                <SocialMediaContainer>
                    <Flex $justify="flex-end" $align="center">
                        {socialMediaData.map(({ Icon, name }, i) => (
                            <CircleIcon key={name}>{<Icon />}</CircleIcon>
                        ))}
                    </Flex>
                </SocialMediaContainer>
            </Flex>
        </HeaderStyled>
    );
};

export default Header;
