import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import {font} from "../../style/common/Common.ts";
import {useState} from "react";


export function Offer() {
    const [activeOfferItem, setActiveOfferItem] = useState(0)
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
            description: 'Lorem ipsum dolor sit amet, cetur adipiscing elisit amet, consectetur adipit, cetur adipiscing et, cetur aditur adipiscing elcing elisit amet, piscing elcing elisit amet, c'
        },
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
            <WrapperComponent flexdirection={'column'} alignitems={'center'}>
                <TitleSection
                    width={'440px'}
                    description={'Things that I can do for my clients. Just make your good trust I love to provide quality works'}
                    title={'What I Offer'}/>
                <WrapperIcons>
                    <BtnArrowLeft onClick={()=>setActiveOfferItem(activeOfferItem-1)} disabled={activeOfferItem ===0}>
                        <ArrowIcon id={'leftArrow'} opacity={activeOfferItem === 0? 0.3: 1}/>
                    </BtnArrowLeft>
                    {icon.map((item, index) => (
                        <OfferItemsStyled key={item.id} $isActive={index === activeOfferItem}>
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
                                {item.description}s
                            </OfferItemsDesctiprion>
                        </OfferItemsStyled>
                    ))}
                    <BtnArrowRight onClick={()=>setActiveOfferItem(activeOfferItem+1)} disabled={activeOfferItem === (icon.length-1)}>
                        <ArrowIcon opacity={activeOfferItem === 2? 0.3: 1} id={'rightArrow'}/>
                    </BtnArrowRight>
                </WrapperIcons>
            </WrapperComponent>
        </OfferSectionStyled>
    )
}


const CartTitle = styled.h3`
    ${font({Fmax: 25, Fmin: 20, weight: 600, letterSpacing: '0.01em'})}
    margin-bottom: 15px;
    text-align: center;
`


type OfferItemsPropsType = {
    $isActive: boolean;
}
const OfferItemsStyled = styled.div<OfferItemsPropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) =>props.$isActive? "0 2px 40px 0 rgba(187, 187, 187, 0.5)": 'none' };
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
    min-width: 150px;
    max-width: 500px;
    padding: 70px 45px;
    overflow: hidden;
    flex-basis: 400px;
    & > svg {
        flex-shrink: 0;
        margin-bottom: 40px;
        color: ${myTheme.colors.additionalText};
    }
    @media ${myTheme.media.large} {
        max-width: 600px;
        max-height: 600px;
        height: 100%;
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
    justify-content: center;
    gap: 30px;
    padding: 70px 50px;
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
        gap: 50px;
        button {
            bottom: auto;
            top: 50%;
            left: auto;
        }
        ${BtnArrowRight} {
            right: -50px;
            transform: translateY(50px) rotate(90deg)
        }
        ${BtnArrowLeft} {
            right: -50px;
            transform: translateY(-50px) rotate(90deg)
        }
    }
`

type ArrowIconProps = {
    id: string,
    opacity?: number,
}

function ArrowIcon(props: ArrowIconProps) {
    return (
        <SvgIcon fill={myTheme.colors.discriptionText} stroke={myTheme.colors.discriptionText} opacity={props.opacity} width={'50px'} height={'50px'} id={props.id}
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

