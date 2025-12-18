import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {Title} from "../../../../components/title/Title.tsx";
import {font} from "../../../style/common/Common.ts";

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
        <StatSkillsStyled>
            <Wrapper flexdirection={'column'}>
                <Title title='My Skills'/>
                <Wrapper flexdirection={'column'} gap={'40px'}>
                    {skills.map((skill, index) => (
                        <SkillProgress key={index} title={skill.title} percent={skill.percent}/>
                    ))}
                </Wrapper>
            </Wrapper>
        </StatSkillsStyled>
    )
}



type TextSkillPropsType = SkillProgressPropsType & {
    title: string,
}

type SkillProgressPropsType = {
    percent: string,
}

const StatSkillsStyled = styled.div`
    max-width: 540px;
    width: 100%;
`

function SkillProgress(props: TextSkillPropsType) {
    return (
        <SkillProgressStyled percent={props.percent}>
            <TextSkill title={props.title} percent={props.percent}/>
            <SkillsProgress/>
        </SkillProgressStyled>
    )
}

const SkillProgressStyled = styled.div<SkillProgressPropsType>`
    width: ${(props => props.percent)};
`

const SkillsProgress = styled.div`
    background-color: ${myTheme.colors.highlighting};
    height: 3px;
   
`

export function TextSkill(props: TextSkillPropsType) {
    const Text = styled.span`
        ${font({weight: 500, Fmax: 16, Fmin: 14, letterSpacing: '0.02em'})}
        margin-bottom: 5px;
    `
    return (
        <TextSkillStyled>
            <Wrapper flexdirection={'row'} justifycontent={'space-between'}>
                <Text>{props.title}</Text>
                <Text>{props.percent}</Text>
            </Wrapper>
        </TextSkillStyled>
    )
}

const TextSkillStyled = styled.div`
    margin-bottom: 10px;
`