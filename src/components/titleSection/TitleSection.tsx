import {WrapperComponent} from "../wrapperComponent/WrapperComponent.tsx";
import {Title} from "../title/Title.tsx";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import styled from "styled-components";
import {font} from "../../layout/style/common/Common.ts";



type TitleDescriptionProps = {
    mgbtdescriotion?: string,
    alignment?: string,
    color_description?: string,
    font_size_description?: string,
}

export const TitleDescription = styled.p<TitleDescriptionProps>`
    ${font({color:myTheme.colors.discriptionText, family: 'Lato, sans-serif', lineHeight: 1.85, weight:400})}
    text-align: center;
    width: 60%;
    font-size: ${(props)=> props.font_size_description || '16px'};
    letter-spacing: 0.02em;
    max-width: 500px;
`


type TitleSectionPropsType = {
    title: string
    description: string
    margin_bottom?: string
}


export function TitleSection(props: TitleSectionPropsType) {
    return (
        <WrapperComponent  margin_bottom={props.margin_bottom} width={'100%'} justifycontent={'center'} alignitems={'center'}>
            <Title title={props.title}/>
            <TitleDescription>{props.description}</TitleDescription>
        </WrapperComponent>
    )
}
