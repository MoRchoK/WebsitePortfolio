import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import {S} from "../skills_styled/Skills_Styled.ts";
import {Title} from "../../../../components/title/Title.tsx";
import {SkillProgress} from "./skillProgress/SkillProgress.tsx";

export function StatSkills() {
    const skills = [
        {
            title: 'Adobe Photoshop',
            percent: '96%'
        },
        {
            title: 'Adobe Illustrator',
            percent: '92%'
        },
        {
            title: 'Adobe After Effect',
            percent: '85%'
        },
        {
            title: 'Adobe InDesign',
            percent: '94%'
        },
    ]
    return (
        <S.StatSkillsStyled>
            <Wrapper flexdirection={'column'}>
                <Title title='My Skills'/>
                <Wrapper flexdirection={'column'} gap={'40px'}>
                    {skills.map((skill, index) => (
                        <SkillProgress key={index} title={skill.title} percent={skill.percent}/>
                    ))}
                </Wrapper>
            </Wrapper>
        </S.StatSkillsStyled>
    )
}
