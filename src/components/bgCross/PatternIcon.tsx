import styled from "styled-components";
import {IconBg} from "../iconBg/IconBg.tsx";


type crossPropsType = {
    top?: string
    bottom?: string
    left?: string
    right?: string
    stroke?: string
    rotate?: number
}

const СrossStyled = styled.div<crossPropsType>`
    position: absolute;
    top: ${(props) => props.top || ''};
    height: 24px;
    width: 24px;
    left: ${(props) => props.left || ''};
    bottom: ${(props) => props.bottom || ''};
    right: ${(props) => props.right || ''};
    z-index: 1;

`



export function PatternIcon (props: crossPropsType) {
    return (
        <СrossStyled top={props.top} bottom={props.bottom} left={props.left} right={props.right}>
            <IconBg stroke={props.stroke} top={'0px'} left={'0px'} id={'line'}/>
            <IconBg stroke={props.stroke} rotate={90} top={'-7px'} left={'-13px'} id={'line'}/>
        </СrossStyled>
    )
}
