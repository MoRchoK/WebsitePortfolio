import * as React from "react";
import {S} from "../../portfolio_styled/Portfolio_Styled.ts"




type OverleyPostPropsType = {
    title: string
}



export const OverleyPost: React.FC<{title: string}> = ({title}: OverleyPostPropsType) =>{
    return (
        <S.WrapperOverlay flexdirection={"column"}>
            <S.OverlayTitle>{title}</S.OverlayTitle>
            <S.OverlayDescription>Package Design</S.OverlayDescription>
        </S.WrapperOverlay>
    )
}


