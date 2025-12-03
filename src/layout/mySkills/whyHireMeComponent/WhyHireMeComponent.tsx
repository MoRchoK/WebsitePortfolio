import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import styled from "styled-components";

export function WhyHireMeComponent() {
    return (
        <WrapperComponentStyled width={'26%'}>
            <TitleComponent title='Why Hire Me ?'/>
            <MySkillsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere aliquet
                amet
                pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse risus.<br/> Vulputate
                pulvinar
                cursus suspendisse risus vulputate enim pharetra eu. Tetur adipiscing elit eu placera.
            </MySkillsText>
            <a>Hire Me</a>
            <button>Download CV</button>
        </WrapperComponentStyled>


    )
}


const MySkillsText = styled.p`
    color: ${myTheme.colors.discriptionText};
`

