import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

export function Logo (){

    return(
            <WrapperLogo>
                <LogoTitleStyled>Daniel<LogoPeriodStyled></LogoPeriodStyled></LogoTitleStyled>
            </WrapperLogo>
    )
}



const LogoTitleStyled = styled.span`
    font-size: 38px;
    color: ${myTheme.colors.PraymaryText};
    position: relative;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    
`


const LogoPeriodStyled = styled.span`
    background-color: ${myTheme.colors.highlighting};
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    
`

const WrapperLogo = styled.div`
    display: flex;
    flex-wrap: nowrap;
`