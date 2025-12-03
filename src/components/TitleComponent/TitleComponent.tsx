import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

type TitlePropsType = {
    title: string,
}

export function TitleComponent(props: TitlePropsType) {
    return (
        <TitleStyled>
            {props.title}
        </TitleStyled>
    )
}

const TitleStyled = styled.h2`
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -1px;
    color: ${myTheme.colors.Title};
    
`