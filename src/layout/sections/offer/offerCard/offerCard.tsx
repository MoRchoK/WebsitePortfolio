import {SvgIcon} from "../../../../components/svgIcon/SvgIcon.tsx";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {icon} from "../Offer.tsx";
import {S} from "../offer_Styled/Offer_Styled.ts";
import * as React from "react";








type OfferCardPropsType = {
    index: number
    activeOfferItem: number
    item: icon
}


export const OfferCard: React.FC<OfferCardPropsType> = ({index, activeOfferItem, item}:OfferCardPropsType )=>{
    return (
        <S.OfferItems data-value={index+1 + ''} key={item.id} $isActive={index === activeOfferItem}>
            <SvgIcon
                key={item.id}
                id={item.id}
                width={'85px'}
                height={'85px'}
                viewBox={item.viewBox}
                fill={item.$is_fill ? myTheme.colors.additionalText : 'transparent'}
                stroke={item.$is_stroke ? myTheme.colors.additionalText : 'transparent'}
            />
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.CardDesctiprion>
                {item.description}
            </S.CardDesctiprion>
        </S.OfferItems>
    )
}

