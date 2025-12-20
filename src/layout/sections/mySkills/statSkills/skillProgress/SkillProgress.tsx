import {S} from "../../skills_styled/Skills_Styled.ts";
import {TextSkill} from "../textSkills/TextSkills.tsx";



type SkillProgressPropsType = {
    percent: string,
}
export type TextSkillPropsType = SkillProgressPropsType & {
    title: string,
}

export const SkillProgress = (props: TextSkillPropsType)=> {
    return (
        <S.SkillProgressWrapper percent={props.percent}>
            <TextSkill title={props.title} percent={props.percent}/>
            <S.SkillsProgress/>
        </S.SkillProgressWrapper>
    )
}
