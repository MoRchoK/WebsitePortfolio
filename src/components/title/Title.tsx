import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {font} from "../../layout/style/common/Common.ts";


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
    ${font({Fmax: 48, Fmin: 34, color:myTheme.colors.Title, letterSpacing: '0.01em' })};
    text-align: center;
`
