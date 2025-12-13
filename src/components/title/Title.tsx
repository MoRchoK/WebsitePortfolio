import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


type TitleProps = {
    title: string
}

export function Title(props: TitleProps) {
    return (
        <TitleStyled>
            {props.title}
        </TitleStyled>
    )
}

const TitleStyled = styled.h2`
    font-size: 48px;
    letter-spacing: 0.01em;
    color: ${myTheme.colors.Title};
    line-height: 100%;
    margin-bottom: 0.4em;
`
