import styled from "styled-components";
import {myTheme} from "../../components/Theme/Theme.styled.tsx";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";

export function MySkillsComponent() {
    return (
        <MySkillsSectionStyled>
            <WhyHireMeComponent/>

        </MySkillsSectionStyled>
    )
}


const MySkillsSectionStyled = styled.div`
    height: 50vh;
    background-color: ${myTheme.colors.additionalSection};
`

