import {S} from "../offer_Styled/Offer_Styled.ts";
import {ArrowIcon} from "../../../../components/arrowIcon/ArrowIcon.tsx";
import * as React from "react";









type NextBtnPropsType = BtnPropsType & {
    length: number
}

type BtnPropsType = {
    setActiveOfferItem: (value: number) => void;
    activeOfferItem: number
}

export const NextBtn = (props: NextBtnPropsType) => {
    return (
        <S.BtnArrowRightWrapper onClick={() => props.setActiveOfferItem(props.activeOfferItem + 1)}
                                disabled={props.activeOfferItem === (props.length - 1)}>
            <ArrowIcon opacity={props.activeOfferItem === (props.length - 1) ? 0.3 : 1} id={'rightArrow'}/>
        </S.BtnArrowRightWrapper>
    )
}


export const PrevBtn: React.FC<BtnPropsType> = ({setActiveOfferItem, activeOfferItem}: BtnPropsType) =>{
    return (
        <S.BtnArrowLeftWrapper onClick={()=>setActiveOfferItem(activeOfferItem-1)} disabled={activeOfferItem ===0}>
            <ArrowIcon id={'leftArrow'} opacity={activeOfferItem === 0? 0.3: 1}/>
        </S.BtnArrowLeftWrapper>
    )
}