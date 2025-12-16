import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {font} from "../../layout/style/common/Common.ts";


type BtnStyledPropsType = {
    border_color?: string
}

export const BtnStyled = styled.a<BtnStyledPropsType>`
    display: inline-block;
    border: ${(props) => props.border_color ? props.border_color + ' 2px solid' : myTheme.colors.borderColorBtnMain + ' 2px solid'};
    ${font({weight: 500, Fmax: 16, Fmin: 14, letterSpacing: '0.03em', color: myTheme.colors.PraymaryText })}
    border-radius: 3em;
    background-color: 'transparent';
    padding: 1.25em 3em;
    cursor: pointer;
`