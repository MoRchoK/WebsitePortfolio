import styled from "styled-components";
import {myTheme} from "../style/Theme/Theme.styled.tsx";
import {BtnStyled} from "../../components/btnStyled/BtnStyled.tsx";
import {WrapperComponent} from "../../components/wrapperComponent/WrapperComponent.tsx";
import {Container} from "../../container/Container.ts";
import {SvgIcon} from "../../components/svgIcon/SvgIcon.tsx";
import {TitleSection} from "../../components/titleSection/TitleSection.tsx";
import {ModalContact} from "../../components/modalContact/ModalContact.tsx";
import {useState} from "react";
import {font} from "../style/common/Common.ts";


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


function handleClick  (e){
    e.preventDefault()
    setIsActive(false)
}


    return (
        <FooterStyled>
            <Container>
                <WrapperComponent className={'WrapperFooterMain'}>
                    <WrapperComponent className={'FooterMainInfo'} alignitems={'center'} justifycontent={'flex-start'}>
                        <TitleSection
                            margin_bottom={'60px'}
                            description={'I’m available for freelance work. Have any projects in your mind? Just feel free to contact me'}
                            title={'Let’s work together'}/>
                        <BtnStyled
                            as={'button'}
                            onClick={() => {
                                setIsActive(true)
                            }}
                            bg_color={'transparent '} margin_bottom={'100px'}
                            border_color={myTheme.colors.borderFooterBtn}>CONTACT ME</BtnStyled>
                    </WrapperComponent>
                    <WrapperComponent className={'WrapperFooterDown'} flexdirection={'row'} alignitems={'center'} >
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
                        <ModalContact handle_click={(e)=>handleClick(e)} isOpen={isActive}/>
                    </WrapperComponent>
                </WrapperComponent>
            </Container>
        </FooterStyled>
    )
}

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media ${myTheme.media.tablet} {
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

`
const SocialItem = styled.li`
    @media ${myTheme.media.mobile} {
        width: 24px;
        svg{
            width: 24px;
        }
    }
`

const SocialLink = styled.a`
    cursor: pointer;
    color: ${myTheme.colors.borderFooterBtn};
    &:hover {
        color: ${myTheme.colors.highlighting};
    }
    @media ${myTheme.media.mobile} {
        svg{
            width: 20px;
        }
    }
`

const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${myTheme.colors.secondarySection};
    padding: 130px 50px 0;
    .WrapperFooterMain {
        position: relative;
        width: 100%;
        &:before {
            content: '';
            position: absolute;
            bottom: 115px;
            z-index: 9999999;
            left: -45px;
            background-color: ${myTheme.colors.footerLine};
            height: 1px;
            width: calc(100% + 90px);
        }

        @media ${myTheme.media.mobile} {
            button{
               padding: 1em 2em;
            }
        }
    }
    
    h2 {
        ${font({Fmax: 72, Fmin: 40, lineHeight: 0.8})}
        letter-spacing: 0.015em;
        text-align: center;
    }
    .WrapperFooterDown {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 60px;
        min-height: 115px;
        @media ${myTheme.media.tablet} {
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
        }
        @media ${myTheme.media.mobile} {
            padding: 0;
        }
    }
`
const Footnote = styled.small`
    ${font({weight: 400, family: ' Lato, sans-serif', color: myTheme.colors.descriptionFooterText})}
    position: relative;
    font-size: 14px;
    text-align: center;
    @media ${myTheme.media.tablet} {
        width: 100%;
        justify-content: space-around;
    }
`

const FooterAccent = styled.span`
    color: ${myTheme.colors.PraymaryText};
`