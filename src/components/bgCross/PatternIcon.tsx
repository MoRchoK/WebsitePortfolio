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
    svg{
        stroke: ${(props)=>props.stroke};
        position: absolute;
    }
    &>svg:first-child{
        top: 0;
        left: 0;
    }
    &>svg:last-child{
        top: -7px;
        left: -13px;
        transform: rotate(90deg);
        
    }

`



export function PatternIcon (props: crossPropsType) {
    return (
        <СrossStyled stroke={props.stroke} top={props.top} bottom={props.bottom} left={props.left} right={props.right}>
            <IconBg  id={'line'}/>
            <IconBg  id={'line'}/>
        </СrossStyled>
    )
}
