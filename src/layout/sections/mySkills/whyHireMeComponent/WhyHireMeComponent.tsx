import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {ButtonDark} from "../../../../components/buttonDark/Button.tsx";
import {ButtonLight} from "../../../../components/buttonLight/ButtonLight.tsx";
import {Title} from "../../../../components/title/Title.tsx";
import {font} from "../../../style/common/Common.ts";


export function WhyHireMeComponent() {
    return (
        <WrapperComponent>
            <Title title='Why Hire Me ?'/>
            <MySkillsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                amet
                pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate
                pulvinar
                cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
            </MySkillsText>
            <BtnWrapper>
                <ButtonDark title={'Hire Me'}></ButtonDark>
                <ButtonLight title='Download CV'></ButtonLight>
            </BtnWrapper>
        </WrapperComponent>
    )
}



export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
`

const MySkillsText = styled.p`
    ${font({color:myTheme.colors.discriptionText, family:'Lato, sans-serif', weight: 400,  lineHeight: 1.85, Fmax: 16, Fmin: 14})};
    width: 100%;
    margin-bottom: 2.5em;
    letter-spacing: 0.01em;
    
`


