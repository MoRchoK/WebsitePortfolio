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
            <TitleStyled mgbttitle={props.mgbttitle} alignment={props.alignment}>
                {props.title}
            </TitleStyled>
            {props.description && <TitleDescription mgbtdescriotion={props.mgbtdescriotion} alignment={props.alignment}>{props.description}</TitleDescription>}
        </WrapperComponentStyled>
    )
}

type TitleStyledPropsType = TitleDescriptionProps & {
    mgbttitle?: string,
}



const TitleStyled = styled.h2<TitleStyledPropsType>`
    display: flex;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -1px;
    color: ${myTheme.colors.Title};
    margin-bottom: ${(props) => props.mgbttitle || '15px'};
    justify-content: ${(props) => props.alignment || 'start'};
`


type TitleDescriptionProps = {
    mgbtdescriotion?: string,
    alignment?: string,

}

const TitleDescription = styled.p<TitleDescriptionProps>`
    color: ${myTheme.colors.discriptionText};
    margin-bottom: ${(props) => props.mgbtdescriotion || '15px'};
    text-align: ${(props) => props.alignment || 'start'};
    width: 60%;

`