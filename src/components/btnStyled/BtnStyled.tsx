import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

export const BtnStyled = styled.button`
    border: ${myTheme.colors.borderColorBtnMain} 2px solid;
    border-radius: 30px;
    max-width: 210px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .25);
    background-color: ${myTheme.colors.BgMainSection};
    min-height: 60px;
    color: ${myTheme.colors.PraymaryText};
`