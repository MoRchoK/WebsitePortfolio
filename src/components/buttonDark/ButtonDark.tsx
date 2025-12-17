import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {font} from "../../layout/style/common/Common.ts";



export const BtnDark = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.PraymaryText};
    padding: 1em 1.5em;
    ${font({weight:500, Fmax: 16, Fmin:14, color: myTheme.colors.whteColor})}
    letter-spacing: 0.03em;
    white-space: nowrap;

   
`

