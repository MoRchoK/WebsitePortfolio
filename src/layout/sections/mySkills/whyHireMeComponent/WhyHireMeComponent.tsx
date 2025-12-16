import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {Title} from "../../../../components/title/Title.tsx";
import {font} from "../../../style/common/Common.ts";
import {BtnDark} from "../../../../components/buttonDark/ButtonDark.tsx";
import {ButtonLight} from "../../../../components/buttonLight/ButtonLight.tsx";


export function WhyHireMeComponent() {
    return (
        <WhyHireMeComponentStyled>
            <WrapperComponent flexdirection={'column'} justifycontent={'flex-start'}>
                <Title title='Why Hire Me ?'/>
                <MySkillsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                    amet
                    pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate
                    pulvinar
                    cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
                </MySkillsText>
                <BtnWrapper>
                    <BtnDark as={'a'}>Hire Me</BtnDark>
                    <ButtonLight type={'submit'}>Download CV</ButtonLight>
                </BtnWrapper>
            </WrapperComponent>
        </WhyHireMeComponentStyled>
    )
}


const WhyHireMeComponentStyled = styled.div`
    max-width: 500px;
    width: 100%;
`
export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;
    
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
`


