import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import logo from '../../../../image/mainPhoto.webp'


export function MainInfoComponent() {
    return (
        <WrapperComponent width={'100%'}>
            <WrapperComponent width={'50%'} alignitems={'flex-start'} justifycontent={'center'}>
                <MainTitle>Graphic Designer</MainTitle>
                <GreetingStyled>Hello I’m<br/> <NameTitleStyled>Daniel Bryan</NameTitleStyled></GreetingStyled>
                <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</DiscriptionTextStyled>
                <BtnStyled>GET IN TOUCH</BtnStyled>
            </WrapperComponent>
        </WrapperComponent>
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
