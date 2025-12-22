import {S} from "../mySkills/skills_styled/Skills_Styled.ts";
import {Container} from "../../../container/Container.ts";
import {WhyHireMeComponent} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";


export function MySkills() {
    return (
        <S.MySkillsSection id={'about'}>
            <Container>
                <S.WrapperSkills flexdirection={'row'} gap={'20px'} justifycontent={'space-between'}>
                    <WhyHireMeComponent/>
                    <StatSkills/>
                </S.WrapperSkills>
            </Container>
        </S.MySkillsSection>
    )
}







