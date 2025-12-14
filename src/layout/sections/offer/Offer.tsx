
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import {font} from "../../style/common/Common.ts";


export function Offer() {
    type icon = {
        id: string,
        title: string,
        viewBox: string,
        description: string,
        $is_fill: boolean,
        $is_stroke: boolean,
    }
    const icon: Array<icon> = [
        {
            id: "brush",
            title: "Brush",
            viewBox: "0 0 64 64",
            $is_fill: true,
            $is_stroke: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci eget mi elit cursus donec amet sed sagittis.'
        },
        {
            id: "Tshirt",
            $is_fill: false,
            $is_stroke: true,
            title: "T-Shirt Design",
            viewBox: "3 3 58 58",
            description: 'Lorem ipsum dolor sit amet, cetur adipiscing elisit amet, consectetur adipit, cetur adipiscing et, cetur aditur adipiscing elcing elisit amet, piscing elcing elisit amet, c'},
        {
            id: "box",
            $is_fill: false,
            $is_stroke: true,
            title: "Package Design",
            viewBox: "0 0 24 24",
            description: 'Lorem ipsum dolor sit amet, sit ametOrsit ametur adipiscing elit. Orsit ametmet, consectetur adipiscing elisit amet, consectetur adipiscing elici eget mi elit cursus donec amet sed sagittis'
        },
    ]

    return (
        <OfferSectionStyled>
                <WrapperComponent alignitems={'center'}>
                    <TitleSection
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                        title={'What I Offer'}/>
                    <WrapperIcons  >
                        <BtnArrowLeft>
                            <ArrowIcon id={'leftArrow'}/>
                        </BtnArrowLeft>
                        {icon.map((item) => (
                            <OfferItemsStyled key={item.id}>
                                <SvgIcon
                                    key={item.id}
                                    id={item.id}
                                    width={'85px'}
                                    height={'85px'}
                                    viewBox={item.viewBox}
                                    fill={item.$is_fill ? myTheme.colors.additionalText : 'transparent'}
                                    stroke={item.$is_stroke ? myTheme.colors.additionalText : 'transparent'}
                                />
                                <CartTitle>{item.title}</CartTitle>
                                <OfferItemsDesctiprion>
                                    {item.description}
                                </OfferItemsDesctiprion>
                            </OfferItemsStyled>
                        ))}
                        <BtnArrowRight>
                            <ArrowIcon id={'rightArrow'}/>
                        </BtnArrowRight>
                    </WrapperIcons>
                </WrapperComponent>
        </OfferSectionStyled>
    )
}


const CartTitle = styled.h3`
    ${font({Fmax: 25, Fmin: 20, weight:600})}
    letter-spacing: 0.01em;
    margin-bottom: 15px;
    text-align: center;
`

const OfferItemsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 40px 0 rgba(187, 187, 187, 0.5);
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
    max-width: 500px;
    min-width: 150px;
    min-height: 200px;
    max-height: 400px;
    padding: 70px 45px;
    overflow: hidden;
    flex-basis: 400px;

    & > svg {
        flex-shrink: 0;
        margin-bottom: 40px;
        color: ${myTheme.colors.additionalText};
    }

    @media ${myTheme.media.large} {
        justify-content: center;
        max-width: 500px;
        width: 100%;
    }
    @media ${myTheme.media.mobile} {
        svg {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
        }
    }
`
const OfferItemsDesctiprion = styled.p`
    font-size: 16px;
    color: ${myTheme.colors.descriptionCard};
    text-align: center;
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    
`
export const BtnArrowRight = styled.button`
    right: -50px;
    @media screen and (max-width: 1550px) {
        right: 40%;
    }
`
export const BtnArrowLeft = styled.button`
    left: -50px;
    flex-shrink: 0;
    @media screen and (max-width: 1550px) {
        left: 40%;
    }
`

const WrapperIcons = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1550px;
    min-height: 200px;
    height: 100%;
    justify-content: center;
    gap: 30px;
    padding: 70px 47px;
    position: relative;
    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (max-width: 1550px) {
        button {
            bottom: 0;
            top: auto;
            transform: none;
        }
    }
    @media ${myTheme.media.extra_large} {
        padding: 70px 20px;
        gap: 20px;
        button {
            bottom: 0;
            top: auto;
            transform: none;
        }
    }
    @media ${myTheme.media.large} {
        flex-direction: column;
        align-items: center;
        width: 80%;
        gap: 30px;
        button {
            bottom: auto;
            top: 50%;
            left: auto;
        }
       ${BtnArrowRight}{
            right: 0;
            transform: translateY(50px) rotate(90deg)
        }
        ${BtnArrowLeft}{
            right: 0;
            transform: translateY(-50px) rotate(90deg)
        }
    }
    @media ${myTheme.media.tablet} {
        ${BtnArrowRight}{
            right: -50px;
        }
        ${BtnArrowLeft}{
            right: -50px;
        }
    }
    @media ${myTheme.media.mobile} {
        padding: 20px 0;
        }
    
`

type ArrowIconProps = {
    id: string,
}

function ArrowIcon(props: ArrowIconProps) {
    return (
        <SvgIcon fill={'black'} stroke={'black'} width={'50px'} height={'50px'} id={props.id}
                 viewBox={"0 0 53 35"}/>
    )
}
const OfferSectionStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${myTheme.colors.whteColor};
    padding: 150px 0;
    
    @media ${myTheme.media.mobile} {
        padding-right: 50px;
    }
    
    
    
`

