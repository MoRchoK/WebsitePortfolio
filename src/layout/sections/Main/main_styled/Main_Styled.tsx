import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";



const MainStyled = styled.section`
    background: no-repeat right bottom/120vh url("/src/assets/image/iamDanial.png"), no-repeat center/cover url("/src/assets/image/BgThreeCircles.svg");
    background-color: ${myTheme.colors.BgMainSection};
    min-height: 100vh;
    padding-top: 150px;
    padding-bottom: 50px;

    @media ${myTheme.media.extra_large} {
             background:  no-repeat  300px bottom/110vh url("/src/assets/image/iamDanial.png"),no-repeat center/cover url("/src/assets/image/BgThreeCircles.svg");
         }
        @media ${myTheme.media.large} {
        background: no-repeat 300px bottom/100vh url("/src/assets/image/iamDanial.png"), no-repeat center/cover url("/src/assets/image/BgMain.svg");
    }
        @media ${myTheme.media.tablet} {
        background: no-repeat center/cover url("/src/assets/image/BgMain.svg");
    }
     @media screen and (max-width: 500px), (max-height: 600px) {
         background: none
`


// Main Info
const MainInfoWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 425px;
`

const MainTitle = styled.h1`
    ${font({color: myTheme.colors.additionalText, weight: 500})};
    font-size: 18px;
    margin-bottom: 30px;
    white-space: nowrap;
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




export const S = {
    MainStyled,
    MainInfoWrapper,
    MainTitle,
    DiscriptionTextStyled,
    GreetingStyled,
    NameTitleStyled,
}


