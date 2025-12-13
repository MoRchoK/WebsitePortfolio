import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";

import {Container} from "../../../container/Container.ts";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";


export function MySkills() {
    return (
        <MySkillsSectionStyled>
            <Container>
                <WrapperComponent flexdirection={'row'} justifycontent={'space-between'}>
                    <WhyHireMeComponent/>
                    <StatSkills/>
                </WrapperComponent>
            </Container>
        </MySkillsSectionStyled>
    )
}

const MySkillsSectionStyled = styled.section`
    display: flex;
    min-height: 300px;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.secondarySection};
    gap: 160px;
    position: relative;
    padding: 130px;
    h2{
        margin-bottom: 40px;
    }
`




