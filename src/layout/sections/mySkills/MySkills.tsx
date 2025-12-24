import {S} from "../mySkills/skills_styled/Skills_Styled.ts";
import {Container} from "../../../container/Container.ts";
import {WhyHireMeComponent, WhyHireMePropsType} from "./whyHireMeComponent/WhyHireMeComponent.tsx";
import {StatSkills} from "./statSkills/StatSkills.tsx";




type MySkillsPropsType = WhyHireMePropsType &  {

}
export const MySkills = (props: MySkillsPropsType)=> {
    return (
        <S.MySkillsSection id={'about'}>
            <Container>
                <S.WrapperSkills flexdirection={'row'} gap={'20px'} justifycontent={'space-between'}>
                    <WhyHireMeComponent setIsActive={props.setIsActive}/>
                    <StatSkills />
                </S.WrapperSkills>
            </Container>
        </S.MySkillsSection>
    )
}







