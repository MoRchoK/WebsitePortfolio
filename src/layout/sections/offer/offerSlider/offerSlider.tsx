import styled from "styled-components";

import 'react-alice-carousel/lib/alice-carousel.css';
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";
import {SvgIcon} from "../../../../components/svgIcon/SvgIcon.tsx";
import {icon} from "../Offer.tsx";
import '../offerSlider/offerSlider.css';


type OfferSliderPropsType = {
    icon: Array<icon>,
    setActiveOfferItem: (value: number)=>void,
    activeOfferItem: number
}



export function OfferSlider(props: OfferSliderPropsType): JSX.Element {
    return (
        <WrapperIcons>
            <BtnArrowLeft onClick={()=>props.setActiveOfferItem(props.activeOfferItem-1)} disabled={props.activeOfferItem ===0}>
                <ArrowIcon id={'leftArrow'} opacity={props.activeOfferItem === 0? 0.3: 1}/>
            </BtnArrowLeft>

            {props.icon.map((item, index) => (
                <OfferItemsStyled key={item.id} $isActive={index === props.activeOfferItem}>
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
            <BtnArrowRight onClick={()=>props.setActiveOfferItem(props.activeOfferItem+1)} disabled={props.activeOfferItem === (props.icon.length-1)}>
                <ArrowIcon opacity={props.activeOfferItem === 2? 0.3: 1} id={'rightArrow'}/>
            </BtnArrowRight>
        </WrapperIcons>
    )
}



export const BtnArrowRight = styled.button`
    right: -85px;
    @media screen and (max-width: 1550px) {
        right: 40%;
    }
`


export const BtnArrowLeft = styled.button`
    left: -85px;
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
    flex-grow: 1;

`