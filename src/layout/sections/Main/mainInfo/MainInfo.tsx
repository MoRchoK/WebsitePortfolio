import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";


export function MainInfo() {
    return (
        <MainInfoStyled>
                <MainTitle>Graphic Designer</MainTitle>
                <Wrapper flexdirection={"column"} alignitems={"flex-start"}>
                    <GreetingStyled>Hello I’m</GreetingStyled>
                    <NameTitleStyled>Daniel Bryan</NameTitleStyled>
                </Wrapper>
                <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</DiscriptionTextStyled>
                <BtnStyled>GET IN TOUCH</BtnStyled>
        </MainInfoStyled>

    )
}


const MainInfoStyled = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 425px;
`

const MainTitle = styled.h1`
    ${font({color: myTheme.colors.additionalText, weight: 500})};
    font-size: 18px;
    margin-bottom: 30px;
`

const DiscriptionTextStyled = styled.p`
    ${font({color: myTheme.colors.discriptionText, family: 'Lato, sans-serif', weight: 400, lineHeight: 2, letterSpacing: '0.025em'})};
    font-size: 16px;
    margin-bottom: 30px;
    
`
const GreetingStyled = styled.span`
    ${font({Fmax: 80, Fmin: 40 , letterSpacing: '-0.05em', lineHeight: 1})};
    
`

type NameTitlePropsType = {
    color?: string,
    text?: string,
}

const NameTitleStyled = styled.span<NameTitlePropsType>`
    ${font({color: myTheme.colors.highlighting, Fmax: 80, Fmin: 40, letterSpacing: '-0.05em',  lineHeight: 1})};
    margin-bottom: 15px;
`


