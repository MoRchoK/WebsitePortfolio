import styled from "styled-components";
import {myTheme} from "../Theme/Theme.styled.tsx";

type CircleStyledPropsType = {
    left?: string,
    top?: string,
    right?: string,
    bottom?: string,
}

export const CircleStyled = styled.div<CircleStyledPropsType>`
    position: absolute;
    border-radius: 50%;
    border: ${myTheme.colors.highlighting} 8px dashed;
    width: 50vh;
    height: 50vh;
    top: ${(props) => props.top || ''};
    bottom: ${(props) => props.bottom || ''};
    left: ${(props) => props.left || ''};
    right: ${(props) => props.right || ''};
`