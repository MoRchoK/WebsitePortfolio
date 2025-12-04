import styled from "styled-components";



type WrapperComponentPropsType = {
    flexDirection?: string,
    alignItems?: string,
    flexWrap?: string,
    justifyContent?: string,
    width?: string
    position?: string,
    left?: string,
}



export const WrapperComponentStyled= styled.div<WrapperComponentPropsType>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items:  ${(props) => props.alignItems || 'stretch'};
    flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
    width: ${(props) => props.width || 'auto'};
    position: ${(props) => props.position || 'static'};
    left: ${(props) => props.left || '0'};
    z-index: 0;
`