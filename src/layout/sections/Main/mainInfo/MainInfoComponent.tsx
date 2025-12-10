import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";

export function MainInfoComponent() {
    return (
        <WrapperComponentStyled width={'100%'}>
            <WrapperComponentStyled width={'50%'} alignitems={'flex-start'}>
                <MainTitle>Graphic Designer</MainTitle>
                <GreetingStyled>Hello I’m<br/> <NameTitleStyled>Daniel Bryan</NameTitleStyled></GreetingStyled>
                <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</DiscriptionTextStyled>
                <BtnStyled>GET IN TOUCH</BtnStyled>
            </WrapperComponentStyled>
        </WrapperComponentStyled>
    )
}


const DiscriptionTextStyled = styled.p`
    color: ${myTheme.colors.discriptionText};
    margin-bottom: 50px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    line-height: 2;
    letter-spacing: 0.025em;
`

const MainTitle = styled.h1`
    color: ${myTheme.colors.additionalText};
    font-size: 18px;
    margin-bottom: 23px;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    line-height: 100%;


`

const GreetingStyled = styled.p`
    color: ${myTheme.colors.PraymaryText};
    font-size: 80px;
    letter-spacing: -0.05em;
    line-height: 1;
    font-family: Raleway, sans-serif;
    font-weight: 700;

`


type NameTitlePropsType = {
    color?: string,
    text?: string,
}


const NameTitleStyled = styled.span<NameTitlePropsType>`
    display: block;
    color: ${myTheme.colors.highlighting};
    font-size: 80px;
    margin-bottom: 30px;
`
