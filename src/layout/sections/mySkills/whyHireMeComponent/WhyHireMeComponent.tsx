import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {ButtonDark} from "../../../../components/buttonDark/Button.tsx";
import {ButtonLight} from "../../../../components/buttonLight/ButtonLight.tsx";
import {Title} from "../../../../components/title/Title.tsx";


export function WhyHireMeComponent() {
    return (
        <WrapperComponent  height={'100%'} width={'500px'}>
            <Title title='Why Hire Me ?'/>
            <MySkillsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                amet
                pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus. Vulputate
                pulvinar
                cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
            </MySkillsText>
            <WrapperComponent flexdirection={'row'} gap={'1.5rem'}>
                <ButtonDark title={'Hire Me'}></ButtonDark>
                <ButtonLight title='Download CV'></ButtonLight>
            </WrapperComponent>
        </WrapperComponent>
    )
}


const MySkillsText = styled.p`
    color: ${myTheme.colors.discriptionText};
    margin-bottom: 2.5rem;
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 185%;
`


