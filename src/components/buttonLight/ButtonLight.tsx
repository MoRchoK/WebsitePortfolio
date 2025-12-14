import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {ButtonPropsType} from "../buttonDark/Button.tsx";
import {font} from "../../layout/style/common/Common.ts";




export function ButtonLight(props: ButtonPropsType) {
    return (
        <ButtonLightStyled type={props.type}>{props.title}</ButtonLightStyled>
    )
}


type ButtonLightStyled = {
    type?: string | undefined
}

const ButtonLightStyled = styled.button<ButtonLightStyled>`
    ${font({weight:500, Fmax: 16, Fmin:14})}
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 1em 1.5em;
    border: ${myTheme.colors.borderBtnGray} 2px solid;
    letter-spacing: 0.03em;
    white-space: nowrap;
    
`



