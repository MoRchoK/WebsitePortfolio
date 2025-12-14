import {BtnStyled} from "../../../../components/btnStyled/BtnStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";


export function MainInfoComponent() {
    return (
            <WrapperMainInfo>
                <MainTitle>Graphic Designer</MainTitle>
                <GreetingStyled>Hello I’m<br/> <NameTitleStyled>Daniel Bryan</NameTitleStyled></GreetingStyled>
                <DiscriptionTextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat,
                    faucibus et, et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                    ullamcorper tincidunt.</DiscriptionTextStyled>
                <BtnStyled>GET IN TOUCH</BtnStyled>
            </WrapperMainInfo>
    )
}

const WrapperMainInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    
    @media ${myTheme.media.mobile} {
        width: 100%;
    }
`

const DiscriptionTextStyled = styled.p`
    ${font({color: myTheme.colors.discriptionText, family: 'Lato, sans-serif', weight: 400, lineHeight: 2})};
    font-size: 16px;
    margin-bottom: 50px;
    letter-spacing: 0.025em;
`

const MainTitle = styled.h1`
    ${font({  color: myTheme.colors.additionalText,  weight: 500})};
    font-size: 18px;
    margin-bottom: 23px;
`


const GreetingStyled = styled.span`
    ${font({Fmax: 80, Fmin: 40})};
    letter-spacing: -0.05em;
    margin-bottom: 30px;
`

type NameTitlePropsType = {
    color?: string,
    text?: string,
}


const NameTitleStyled = styled.span<NameTitlePropsType>`
    ${font({color: myTheme.colors.highlighting, Fmax: 80, Fmin: 40})};
    margin-bottom: 30px;
`
