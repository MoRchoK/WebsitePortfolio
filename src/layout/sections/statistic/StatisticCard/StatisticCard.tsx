import * as React from "react";
import {S} from "../statistic_styled.ts";
import {statsType} from "../Statistic.tsx";

type StatiscicCardPropsType = {
    index: number
    item: statsType
}
export const StatiscicCard: React.FC<StatiscicCardPropsType> = ({index,item}:StatiscicCardPropsType ) =>{
    return (
        <S.StatCard flexdirection={'column'}  alignitems={'center'} justifycontent={'center'} key={index} >
            <S.StatValue>{item.value}
            </S.StatValue>
            <S.StatText >
                {item.text}
            </S.StatText>
        </S.StatCard>
    )
}