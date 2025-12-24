import {SvgIcon} from "../../../../components/svgIcon/SvgIcon.tsx";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {icon} from "../Offer.tsx";
import {S} from "../offer_Styled/Offer_Styled.ts";
import * as React from "react";
import {Tilt} from "react-tilt";



type OfferCardPropsType = {
    index: number
    activeOfferItem: number
    item: icon
    setActiveOfferItem: (index: number) => void
}


export const OfferCard: React.FC<OfferCardPropsType> = ({index, activeOfferItem, item, setActiveOfferItem}: OfferCardPropsType) => {
    return (
        <Tilt style={{display: "flex", flexDirection: "column", alignItems: "center", height: '100%' , padding: '12px'}} >
        <S.OfferItems data-value={index + 1 + ''} key={item.id} $isActive={index === activeOfferItem} onClick={() => {setActiveOfferItem(index)}}>
                <SvgIcon
                    key={item.id}
                    id={item.id}
                    width={'85px'}
                    height={'85px'}
                    viewBox={item.viewBox}
                    fill={(item.$is_fill  && (index === activeOfferItem) &&  myTheme.colors.highlighting ) ||  (item.$is_fill && myTheme.colors.additionalText) ||  'transparent'}
                    stroke={(item.$is_stroke && (index === activeOfferItem) &&  myTheme.colors.highlighting) || (item.$is_stroke && myTheme.colors.additionalText)|| 'transparent'}
                />
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardDesctiprion>
                    {item.description}
                </S.CardDesctiprion>

        </S.OfferItems>
        </Tilt>


)
}

