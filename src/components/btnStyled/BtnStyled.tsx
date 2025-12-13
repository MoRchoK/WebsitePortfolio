import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


type BtnStyledPropsType = {
    border_color?: string
    margin_bottom?: string
    bg_color?: string
}


export const BtnStyled = styled.button<BtnStyledPropsType>`
    display: inline-block;
    border: ${(props) => props.border_color ? props.border_color + ' 2px solid' : myTheme.colors.borderColorBtnMain + ' 2px solid'};
    border-radius: 30px;
    background-color: ${(props) => props.bg_color || myTheme.colors.BgMainSection};
    color: ${myTheme.colors.PraymaryText};
    padding: 1.25em 3em;
    margin-bottom: ${(props) => props.margin_bottom};
    font-family: Raleway;
    font-weight: 500;
    letter-spacing: 0.03em;
`