import styled from "styled-components";
import {myTheme} from "../style/Theme/Theme.styled.tsx";
import {BtnStyled} from "../../components/btnStyled/BtnStyled.tsx";
import {WrapperComponent} from "../../components/wrapperComponent/WrapperComponent.tsx";
import {Container} from "../../container/Container.ts";
import {SvgIcon} from "../../components/svgIcon/SvgIcon.tsx";
import {TitleSection} from "../../components/titleSection/TitleSection.tsx";
import {ModalContact} from "../../components/modalContact/ModalContact.tsx";
import {useState} from "react";


export function Footer() {

    const [isActive, setIsActive] = useState(false)

    const logo = [
        {
            name: 'facebook',
            viewBox: "0 0 24 24"
        },
        {
            name: 'twitter',
            viewBox: '0 0 1024 1024'
        },
        {
            name: 'instagram',
            viewBox: "-271 273 256 256"
        },
        {
            name: 'pinterest',
            viewBox: "0 0 24 24"
        },
        {
            name: 'dribble',
            viewBox: "0 0 32 32"
        },
        {
            name: 'youtube',
            viewBox: "0 0 1024 1024"
        }]


    return (
        <FooterStyled>
            <Container>
                <WrapperComponent alignitems={'center'} justifycontent={'flex-start'}>
                    <TitleSection
                        margin_bottom={'60px'}
                        description={'I’m available for freelance work. Have any projects in your mind? Just feel free to contact me'}
                        title={'Let’s work together'}/>
                    <BtnStyled
                        onClick={() => {setIsActive(true)}}
                        bg_color={'transparent '} margin_bottom={'100px'}
                        border_color={myTheme.colors.borderFooterBtn}>CONTACT ME</BtnStyled>
                </WrapperComponent>

                <WrapperFooter>
                    <Footnote>
                        © 2021 <FooterAccent>Templates Jungle.</FooterAccent> All rights reserved
                    </Footnote>
                    <SocialList>
                        {logo.map((icon, index) => (
                            <SocialItem key={index}>
                                <SocialLink>
                                    <SvgIcon
                                        id={icon.name}
                                        height={'24px'}
                                        width={'24px'}
                                        viewBox={icon.viewBox}
                                    >
                                    </SvgIcon>
                                </SocialLink>
                            </SocialItem>
                        ))}
                    </SocialList>
                </WrapperFooter>
            </Container>
                <ModalContact handleClick={()=>setIsActive(false)} isOpen={isActive}/>
        </FooterStyled>
    )
}


const WrapperFooter = styled.div`
    padding: 0 60px;
    position: relative;
    min-height: 115px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  
    &::before{
        content: '';
        position: absolute;
        justify-self: center;
        left: -5%;
        align-self: center;
        bottom: 115px;
        background-color: ${myTheme.colors.footerLine};
        height: 1px;
        width: 110%;
       
        
    }
`

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px
`
const SocialItem = styled.li`
   
`


const SocialLink = styled.a`
    cursor: pointer;
    color: ${myTheme.colors.borderFooterBtn};
    &:hover {
        color: ${myTheme.colors.highlighting};
    }
`

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${myTheme.colors.secondarySection};
    padding-top: 130px;
    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 85px;
        letter-spacing: 0.015em;
        p{
            width: 460px;
        }
    }
 
    
`
const Footnote = styled.small`
    position: relative;
    color: ${myTheme.colors.descriptionFooterText};
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 14px;
    border: 1px red solid;
`
const FooterAccent = styled.span`
    color: ${myTheme.colors.PraymaryText};
`