import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

type TitlePropsType = TitleStyledPropsType & {
    title: string,
}

export function TitleComponent(props: TitlePropsType) {
    return (
        <TitleStyled justifyContent={props.justifyContent} marginBottom={props.marginBottom}>
            {props.title}
        </TitleStyled>
    )
}

type TitleStyledPropsType = {
    marginBottom?: string,
    justifyContent?: string,

}


const TitleStyled = styled.h2<TitleStyledPropsType>`
    display: flex;
    justify-content: ${props => props.justifyContent || "start"};
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -1px;
    color: ${myTheme.colors.Title};
    margin-bottom: ${(props) => props.marginBottom || '0'};
    

`