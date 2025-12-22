import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";

const OfferSection = styled.section`
    background-color: ${myTheme.colors.BgLightSection};
    padding: 100px 0;
    position: relative;
    z-index: 1;
`


const BtnArrowLeftWrapper = styled.button`
`

const BtnArrowRightWrapper = styled.button`
`



// Offer Card

type OfferItemsPropsType = {
    $isActive: boolean;
}

const OfferItems = styled.div<OfferItemsPropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${(props) => props.$isActive ? "0 2px 20px 0 rgba(187, 187, 187, 0.5)" : 'none'};
    background-color: ${myTheme.colors.bgColorIcon};
    border-radius: 90px;
    height: 100%;
    width: 100%;
    padding: 70px 45px;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    &:active{
        cursor: grab;
    }
   
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

const CardTitle = styled.h3`
    ${font({Fmax: 25, Fmin: 20, weight: 600, letterSpacing: '0.01em'})}
    margin-bottom: 15px;
    text-align: center;
`



const BtnArrowRight = styled.button`
    right: -85px;
    @media screen and (max-width: 1550px) {
        right: 40%;
    }
`


const BtnArrowLeft = styled.button`
    left: -85px;
    flex-shrink: 0;
    @media screen and (max-width: 1550px) {
        left: 40%;
    }
`
const CardDesctiprion = styled.p`
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

export const S = {
    OfferSection,
    BtnArrowLeftWrapper,
    BtnArrowRightWrapper,
    OfferItems,
    BtnArrowRight,
    BtnArrowLeft,
    CardTitle,
    CardDesctiprion


}