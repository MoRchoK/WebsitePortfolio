import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {Title} from "../../../../components/title/Title.tsx";

export function StatSkills() {
    return (
        <WrapperComponent height={'100%'} width={'500px'}>
            <Title title='My Skills'/>
            <WrapperComponent>
                <StatSkillComponent title={'Adobe Photoshop'} percent={'96%'}/>
                <StatSkillComponent title={'Adobe Illustrator'} percent={'92%'}/>
                <StatSkillComponent title={'Adobe After Effect'} percent={'85%'}/>
                <StatSkillComponent title={'Adobe InDesign'} percent={'94%'}/>
            </WrapperComponent>
        </WrapperComponent>
    )
}

type StatSkillComponentPropsType = {
    title: string,
    percent: string,
}

function StatSkillComponent(props: StatSkillComponentPropsType) {
    return (
        <WrapperComponent>
            <InfoAboutSkill title={props.title} percent={props.percent}/>
            <SkillStayled percent={props.percent}/>
        </WrapperComponent>
    )
}

type SkillStayledPropsType = {
    percent: string,
}

const SkillStayled = styled.div<SkillStayledPropsType>`
    background-color: ${myTheme.colors.highlighting};
    height: 3px;
    width: ${(props) => props.percent};
    margin-bottom: 40px;

`


type InfoAboutSkillPropsType = {
    title: string,
    percent: string
}


export function InfoAboutSkill(props: InfoAboutSkillPropsType) {
    const NameSkillStyled = styled.span`
        font-size: 16px;
        font-weight: 500;
        color: ${myTheme.colors.PraymaryText};
        margin-bottom: 0.6rem;
        letter-spacing: 0.02em;
    `
    return (
        <WrapperComponent flexdirection={'row'} justifycontent={'space-between'} width={props.percent}>
            <NameSkillStyled>{props.title}</NameSkillStyled>
            <NameSkillStyled>{props.percent}</NameSkillStyled>
        </WrapperComponent>

    )
}
