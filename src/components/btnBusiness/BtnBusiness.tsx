import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

export function BtnBusinessBlack(props: BtnBusinessPropsType) {
    return (
        <BtnBusinessBlackStyled mg_bottom={props.mg_bottom} title={props.title}
                           >{props.title}</BtnBusinessBlackStyled>
    )


}

export type BtnBusinessPropsType =  BtnBusinessBlackStyledPtopsType & {
    title: string,

}


type BtnBusinessBlackStyledPtopsType = {
    mg_bottom?: string
}

const BtnBusinessBlackStyled = styled.a<BtnBusinessBlackStyledPtopsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.PraymaryText};
    padding: 1em 1.5em;
    color: ${myTheme.colors.whteColor};
    font-size: 16px;
    margin-bottom: ${props => props.mg_bottom} ;
    
`

