import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

type TitlePropsType = {
    title: string,
    marginBottom?: string,
}

export function TitleComponent(props: TitlePropsType) {
    return (
        <TitleStyled marginBottom={props.marginBottom}>
            {props.title}
        </TitleStyled>
    )
}

type TitleStyledPropsType = {
    marginBottom?: string,

}


const TitleStyled = styled.h2<TitleStyledPropsType>`
    display: block;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -1px;
    color: ${myTheme.colors.Title};
    margin-bottom: ${(props) => props.marginBottom || '0'};

`