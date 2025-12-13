import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {ButtonPropsType} from "../buttonDark/Button.tsx";




export function ButtonLight(props: ButtonPropsType) {
    return (
        <ButtonLightStyled type={props.type}>{props.title}</ButtonLightStyled>
    )
}


type ButtonLightStyled = {
    type?: string | undefined
}

const ButtonLightStyled = styled.button<ButtonLightStyled>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 1em 1.5em;
    font-size: 16px;
    border: ${myTheme.colors.borderBtnGray} 2px solid;
    color: ${myTheme.colors.PraymaryText};
    font-family: Raleway, sans-serif;
    font-weight: 500;
    letter-spacing: 0.03em;
    line-height: 1;


`



