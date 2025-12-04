import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <WhyHireMeComponent/>
            <StatSkills/>
        </MySkillsSectionStyled>
    )
}


const MySkillsSectionStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: ${myTheme.colors.additionalSection};
    gap: 160px;
    
    
`




