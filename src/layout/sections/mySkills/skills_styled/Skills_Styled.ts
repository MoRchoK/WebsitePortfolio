import {font} from "../../../style/common/Common.ts";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import {BtnDark} from "../../../../components/buttonDark/ButtonDark.tsx";
import {ButtonLight} from "../../../../components/buttonLight/ButtonLight.tsx";



//MySkills
const WrapperSkills = styled(Wrapper)`
    @media ${myTheme.media.large} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 100px;
        h2 {
            align-self: center;
        }
        p {
            text-align: center;
        }
    }
`

const MySkillsSection = styled.section`
    display: flex;
    position: relative;
    z-index: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.secondarySection};
    padding: 130px 0 150px;
    h2 {
        text-align: left;
        margin-bottom: 40px;
    }
`
//WhyHireMeComponent
const WhyHireMe = styled.div`
    max-width: 500px;
    width: 100%;
`
export const BtnWrapper = styled(Wrapper)`
    gap: 25px;
    height: 56px;
    ${BtnDark}{
        max-width: 140px;
        width: 100%;
        height: 100%;
    }
    ${ButtonLight}{
        max-width: 206px;
        width: 100%;
        height: 100%;
    }
    @media ${myTheme.media.large} {
        justify-content: center;
    }
`

const MySkillsText = styled.p`
    ${font({
    color: myTheme.colors.discriptionText,
    family: 'Lato, sans-serif',
    weight: 400,
    lineHeight: 1.85,
    Fmax: 16,
    Fmin: 14,
    letterSpacing: '0.01em'
})};
    margin-bottom: 2.5em;
    max-width: 500px;
    &> span{
        display: block;
        margin-top: 15px;
    }
`

//StatSkills
type SkillProgressPropsType = {
    percent: string,
}
const StatSkillsStyled = styled.div`
    max-width: 540px;
    width: 100%;
`
const SkillProgressWrapper = styled.div<SkillProgressPropsType>`
    width: ${(props => props.percent)};
`
const SkillsProgress = styled.div`
    background-color: ${myTheme.colors.highlighting};
    height: 3px;
   
`
const TextSkill = styled.div`
    margin-bottom: 10px;
`


export const S = {
    WhyHireMe,
    BtnWrapper,
    MySkillsText,
    MySkillsSection,
    WrapperSkills,
    SkillsProgress,
    StatSkillsStyled,
    TextSkill,
    SkillProgressWrapper
}