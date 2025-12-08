import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import {TitleComponent} from "../../../../components/TitleComponent/TitleComponent.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";

export function StatSkills() {
    return (
        <WrapperComponentStyled   height={'100%'} width={'45%'}>
            <TitleComponent title='My Skills'/>
            <div>
                <StatSkillComponent title={'Adobe Photoshop'} percent={'96%'}/>
                <StatSkillComponent title={'Adobe Illustrator'} percent={'92%'}/>
                <StatSkillComponent title={'Adobe After Effect'} percent={'85%'}/>
                <StatSkillComponent title={'Adobe InDesign'} percent={'94%'}/>
            </div>
        </WrapperComponentStyled>
    )
}

type StatSkillComponentPropsType = {
    title: string,
    percent: string,
}

function StatSkillComponent(props: StatSkillComponentPropsType) {
    return (
        <WrapperComponentStyled marginbottom={'40px'} width={'100%'}>
            <InfoAboutSkill title={props.title} percent={props.percent}/>
            <SkillStayled percent={props.percent}/>
        </WrapperComponentStyled>
    )
}

type SkillStayledPropsType = {
    percent: string,
}

const SkillStayled = styled.div<SkillStayledPropsType>`
    background-color: ${myTheme.colors.highlighting};
    height: 3px;
    width: ${(props) => props.percent};

`


type InfoAboutSkillPropsType = {
    title: string,
    percent: string
}


function InfoAboutSkill(props: InfoAboutSkillPropsType) {
    const NameSkillStyled = styled.span`
        font-size: 16px;
        color: ${myTheme.colors.PraymaryText};
        margin-bottom: 0.6rem;
        letter-spacing: 0.02em;
    `
    return (
        <WrapperComponentStyled flexdirection={'row'} justifycontent={'space-between'} width={props.percent}>
            <NameSkillStyled>{props.title}</NameSkillStyled>
            <NameSkillStyled>{props.percent}</NameSkillStyled>
        </WrapperComponentStyled>

    )
}
