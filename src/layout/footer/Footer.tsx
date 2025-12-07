import styled from "styled-components";
import {myTheme} from "../../components/Theme/Theme.styled.tsx";
import {TitleComponent} from "../../components/TitleComponent/TitleComponent.tsx";
import {BtnStyled} from "../../components/btnStyled/BtnStyled.tsx";
import {WrapperComponentStyled} from "../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {IconOffer} from "../sections/offer/offerItems/OfferItems.tsx";
import sprite from "../../../public/iconsSprites.svg";
import {IconBg} from "../../components/iconBg/IconBg.tsx";
import {PatternIcon} from "../../components/bgCross/PatternIcon.tsx";




export function Footer() {

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
            <WrapperComponentStyled alignitems={'center'} justifycontent={'flex-start'}>
                <TitleComponent color_description={myTheme.colors.descriptionFooterText} mgbtdescriotion={'60px'}
                                letter_spacing={'0.015em'}
                                alignment={'center'}
                                mgbttitle={'0.5em'}
                                description={'I’m available for freelance work. Have any projects in your mind? Just feel free to contact me'}
                                font_size_description={'18px'} font_size_title={'72px'} title={'Let’s work together'}/>
                <BtnStyled bg_color={'transparent '} margin_bottom={'100px'}
                           border_color={myTheme.colors.borderFooterBtn}>CONTACT ME</BtnStyled>

                <FooterLine/>

            </WrapperComponentStyled>

            <WrapperComponentStyled height={'15vh'} width={'55vw'} justifycontent={'space-between'} flexdirection={'row'} alignitems={'center'}   >
                <Footnote>
                    © 2021 <FootnoteBold>Templates Jungle.</FootnoteBold> All rights reserved
                </Footnote>

                    <SocialList>
                    {logo.map((icon, index) => (
                        <SocialItem>
                            <SocialLink>
                                <IconOffer key={index} xmlns={"http://www.w3.org/2000/xlink"}
                                           preserveAspectRatio="xMidYMid meet"
                                           height={'24px'}
                                           width={'24px'}
                                           viewBox={icon.viewBox}
                                           fill={myTheme.colors.borderFooterBtn}
                                >
                                    <use xlinkHref={sprite + "#" + icon.name}></use>
                                </IconOffer>
                            </SocialLink>
                        </SocialItem>
                    ))}
                    </SocialList>
            </WrapperComponentStyled>




            <IconBg stroke={myTheme.colors.bgColorIcon} left={'33%'} top={'5%'} id={'polygon'}/>
            <IconBg stroke={myTheme.colors.bgColorIcon} left={'50%'} top={'10%'} id={'polygon'}/>
            <IconBg stroke={myTheme.colors.bgColorIcon} right={'26%'} top={'5%'} id={'elipse'}/>
            <IconBg stroke={myTheme.colors.bgColorIcon} right={'43%'} bottom={'25%'} id={'elipse'}/>
            <PatternIcon  stroke={myTheme.colors.bgColorIcon} left={'30%'} bottom={'33%'}/>
            <PatternIcon  stroke={myTheme.colors.bgColorIcon} left={'22%'} top={'27%'}/>
            <PatternIcon  stroke={myTheme.colors.bgColorIcon} right={'22%'} top={'27%'}/>
            <PatternIcon  stroke={myTheme.colors.bgColorIcon} right={'30%'} bottom={'40%'}/>
        </FooterStyled>
    )
}


const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px
`
const SocialItem = styled.li``


const SocialLink = styled.a`
    cursor: pointer;
`

const FooterLine = styled.hr`
    background-color: ${myTheme.colors.footerLine};
    height: 1px;
    width: 70vw;
`

const FooterStyled = styled.section`
    position: relative;
    padding-top: 5% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    background-color: ${myTheme.colors.secondarySection};
    
    
`

const Footnote = styled.small`
    color: ${myTheme.colors.descriptionFooterText};
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 14px;
   
    
`

const FootnoteBold = styled.span`
    color: ${myTheme.colors.PraymaryText};
`