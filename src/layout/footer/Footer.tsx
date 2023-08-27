import { FC } from '@/types';
import { FooterLogo, FooterSocialMediaContainer, FooterStyled, RightsBlock } from './Footer.styled';
import Logo from '@/assets/images/logo-dark.png';
import { socialMediaData } from '@/data';
import CircleIcon from '@/components/circle-icon/CircleIcon';
import { Flex } from '@/components/flex/Flex.styled';

const Footer: FC = () => {
    return (
        <FooterStyled>
            <Flex $justify="space-between" $align="center" height="100%">
                <FooterLogo>
                    <img src={Logo} />
                </FooterLogo>

                {/* <FooterSocialMediaContainer>
                    <Flex $justify="flex-end" $align="center">
                        {socialMediaData.map(({ Icon, name }, i) => (
                            <CircleIcon key={name}>{<Icon />}</CircleIcon>
                        ))}
                    </Flex>
                </FooterSocialMediaContainer> */}

                <RightsBlock>
                    <h4>All Rights Reserved 2018 3layers</h4>
                </RightsBlock>
            </Flex>
        </FooterStyled>
    );
};

export default Footer;
