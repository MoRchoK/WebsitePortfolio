import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

export function BtnBusinessBlack(props: BtnBusinessPropsType) {
    return (
        <BtnBusinessBlackStyled title={props.title} height={props.height}
                           width={props.width}>{props.title}</BtnBusinessBlackStyled>
    )


}
export type BtnBusinessStyled = {
    width?: string,
    height?: string,
}

export type BtnBusinessPropsType = BtnBusinessStyled & {
    title: string,
}




const BtnBusinessBlackStyled = styled.a<BtnBusinessStyled>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.PraymaryText};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    color: ${myTheme.colors.whteColor};
    font-size: 16px;
`

