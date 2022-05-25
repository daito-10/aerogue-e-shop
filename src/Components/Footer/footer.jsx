import React from 'react';
import { FooterContainer, FooterTop, FooterDiv, FooterItemHeader, FooterItemDiv, FooterItem, FooterSubscribeDiv, NewsLetterDiv, NewsLetterInput, ButtonDiv, SubButton, 
SocialsDiv, SocialIconDiv,IconDiv, FooterBottom, CopyrightDiv, FooterText, BrandDiv  } from './footer.styled';

import { RiInstagramLine, RiFacebookLine,RiWhatsappLine,RiTwitterLine } from "react-icons/ri"

const Footer = () => {
    return ( 
        <FooterContainer>

            <FooterTop>
                <FooterDiv>
                    <FooterItemHeader> COMPANY POLICIES </FooterItemHeader>
                    <FooterItemDiv><FooterItem to='#'> TERMS AND CONDITIONS </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> PRIVACY POLICY </FooterItem></FooterItemDiv>
                </FooterDiv>

                <FooterDiv>
                    <FooterItemHeader> INFORMATION </FooterItemHeader>
                    <FooterItemDiv><FooterItem to='#'> ABOUT US </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> GET IN TOUCH </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> FAQs </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> SHIPPING AND DELIVERY </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> RETURN POLICY </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> CAREERS </FooterItem></FooterItemDiv>
                </FooterDiv>

                <FooterDiv>
                    <FooterItemHeader> PRODUCTS </FooterItemHeader>
                    <FooterItemDiv><FooterItem to='#'> MEN  </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> WOMEN </FooterItem></FooterItemDiv>
                    <FooterItemDiv><FooterItem to='#'> STEALTH BY AEROGUE </FooterItem></FooterItemDiv>
                </FooterDiv>

                <FooterSubscribeDiv>

                    <NewsLetterDiv>
                        <FooterItemHeader> SUBSCRIBE TO OUR NEWSLETTER </FooterItemHeader>
                        <NewsLetterInput placeholder='Email' /> 
                        <ButtonDiv>
                            <SubButton> SUBSCRIBE </SubButton>
                        </ButtonDiv>
                    </NewsLetterDiv>

                    <SocialsDiv> 
                        <FooterItemHeader> CONNECT </FooterItemHeader>
                        <SocialIconDiv>
                            <IconDiv to='#'> <RiInstagramLine size={22} /> </IconDiv>
                            <IconDiv to='#'> <RiFacebookLine size={22} /> </IconDiv>
                            <IconDiv to='#'> <RiWhatsappLine size={22} /> </IconDiv>
                            <IconDiv to='#'> <RiTwitterLine size={22} /> </IconDiv>
                        </SocialIconDiv>
                    </SocialsDiv>

                </FooterSubscribeDiv>

            </FooterTop>

            <FooterBottom>

                <CopyrightDiv>
                    <FooterText> Copyright© {new Date().getFullYear()} Aerogue </FooterText>
                </CopyrightDiv>

                <BrandDiv>
                    <FooterText> Powered by orbX </FooterText>
                </BrandDiv>

            </FooterBottom>



            

        </FooterContainer>
     );
}
 
export default Footer;