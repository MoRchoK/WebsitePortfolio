import {Title} from "../title/Title.tsx";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {font} from "../../layout/style/common/Common.ts";


type TitleDescriptionProps = {
    font_size_description?: string,
}

export const Description = styled.p<TitleDescriptionProps>`
    ${font({color: myTheme.colors.discriptionText, family: 'Lato, sans-serif', lineHeight: 1.85, weight: 400, letterSpacing: '0.02em'})}
    text-align: center;
    font-size: ${(props) => props.font_size_description || '16px'};
`


type TitleSectionPropsType = TitleSectionProps & {
    title: string
    description: string
}

export function TitleSection(props: TitleSectionPropsType) {
    return (
        <TitleSectionStyled gap={props.gap} width={props.width}>
                <Title title={props.title}/>
                <Description>{props.description}</Description>
        </TitleSectionStyled>
    )
}

type TitleSectionProps = {
    gap?: string
    width?: string
}

const TitleSectionStyled = styled.div<TitleSectionProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${(props) => props.width};
    gap: ${(props)=> props.gap || '15px'};
    text-align: center;

`
