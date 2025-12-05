import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

export function BtnBusinessBlack(props: BtnBusinessPropsType) {
    return (
        <BtnBusinessBlackStyled title={props.title}
                           >{props.title}</BtnBusinessBlackStyled>
    )


}

export type BtnBusinessPropsType =  {
    title: string,
}




const BtnBusinessBlackStyled = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.PraymaryText};
    padding: 1em 1.5em;
    color: ${myTheme.colors.whteColor};
    font-size: 16px;
    
`

