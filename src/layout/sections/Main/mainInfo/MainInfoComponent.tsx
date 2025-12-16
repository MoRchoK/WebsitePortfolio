import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";
import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";


export function MainInfoComponent() {
    return (
        <WrapperComponent flexdirection={"column"} justifycontent={"center"} alignitems={"flex-start"}>
            <MainTitle>Graphic Designer</MainTitle>
            <WrapperComponent flexdirection={"column"} alignitems={"flex-start"}>
                <GreetingStyled>Hello I’m</GreetingStyled>
                <NameTitleStyled>Daniel Bryan</NameTitleStyled>
            </WrapperComponent>
            <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                ullamcorper tincidunt.</DiscriptionTextStyled>
            <BtnStyled>GET IN TOUCH</BtnStyled>
        </WrapperComponent>
    )
}

const MainTitle = styled.h1`
    ${font({color: myTheme.colors.additionalText, weight: 500})};
    font-size: 18px;
    max-width: 514px;
    margin-bottom: 25px;
`

const DiscriptionTextStyled = styled.p`
    ${font({color: myTheme.colors.discriptionText, family: 'Lato, sans-serif', weight: 400, lineHeight: 2, letterSpacing: '0.025em'})};
    font-size: 16px;
    margin-bottom: 50px;
    max-width: 514px;
    height: 100%;
    
`
const GreetingStyled = styled.span`
    ${font({Fmax: 80, Fmin: 40 , letterSpacing: '-0.05em'})};
    max-width: 514px;
`

type NameTitlePropsType = {
    color?: string,
    text?: string,
}

const NameTitleStyled = styled.span<NameTitlePropsType>`
    ${font({color: myTheme.colors.highlighting, Fmax: 80, Fmin: 40})};
    margin-bottom: 25px;
    max-width: 514px;
`


