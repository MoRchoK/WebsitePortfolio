import styled from "styled-components";
import {font} from "../../../../style/common/Common.ts";
import {S} from "../../skills_styled/Skills_Styled.ts";
import {Wrapper} from "../../../../../components/wrapperComponent/Wrapper.tsx";
import {TextSkillPropsType} from "../StatSkills.tsx";






export function TextSkill(props: TextSkillPropsType) {
    return (
        <S.TextSkill>
            <Wrapper flexdirection={'row'} justifycontent={'space-between'}>
                <Text>{props.title}</Text>
                <Text>{props.percent}</Text>
            </Wrapper>
        </S.TextSkill>
    )
}

const Text = styled.span`
        ${font({weight: 500, Fmax: 16, Fmin: 14, letterSpacing: '0.02em'})}
        margin-bottom: 5px;
    `