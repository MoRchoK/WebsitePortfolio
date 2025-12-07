import {BtnBusinessPropsType} from "../btnBusiness/BtnBusiness.tsx";
import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";









export function ButtonLight(props: BtnBusinessPropsType) {
    return (
        <ButtonLightStyled>{props.title}</ButtonLightStyled>
    )
}

const ButtonLightStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 1em 1.5em;
    font-size: 16px;
    border: ${myTheme.colors.borderBtnGray} 2px solid;
   
    color: ${myTheme.colors.PraymaryText};


`



