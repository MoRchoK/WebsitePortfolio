import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";
import {WrapperComponentStyled} from "../wrapperComponent/WrapperComponentStyled.tsx";

type TitlePropsType = TitleStyledPropsType & {
    title: string,
    description?: string,
    alignment?: string,
    mgbtdescriotion?: string,
    mgbttitle?: string,


}

export function TitleComponent(props: TitlePropsType) {
    return (
        <WrapperComponentStyled alignitems={props.alignment}>
            <TitleStyled letter_spacing={props.letter_spacing} font_size_title={props.font_size_title} mgbttitle={props.mgbttitle} alignment={props.alignment}>
                {props.title}
            </TitleStyled>
            {props.description && <TitleDescription color_description ={props.color_description} mgbtdescriotion={props.mgbtdescriotion} alignment={props.alignment}>{props.description}</TitleDescription>}
        </WrapperComponentStyled>
    )
}
type TitleStyledPropsType = TitleDescriptionProps & {
    mgbttitle?: string,
    font_size_title?: string,
    letter_spacing?: string,
}

const TitleStyled = styled.h2<TitleStyledPropsType>`
    font-size: ${(props) => props.font_size_title|| '48px' };
    line-height: 100%;
    letter-spacing: ${(props)=>props.letter_spacing ||  '-1px'};
    color: ${myTheme.colors.Title};
    margin-bottom: ${(props) => props.mgbttitle || '15px'};
    justify-content: ${(props) => props.alignment || 'start'};
`


type TitleDescriptionProps = {
    mgbtdescriotion?: string,
    alignment?: string,
    color_description?: string,
    font_size_description?: string,
}

export const TitleDescription = styled.p<TitleDescriptionProps>`
    color: ${props=>props.color_description || myTheme.colors.discriptionText};
    margin-bottom: ${(props) => props.mgbtdescriotion || '15px'};
    text-align: ${(props) => props.alignment || 'start'};
    width: 60%;
    font-size: ${(props)=> props.font_size_description || '16px'};
    line-height: 185%;
    font-family: Lato, sans-serif;
    font-weight: 400;
    letter-spacing: 0.02em;
    
`