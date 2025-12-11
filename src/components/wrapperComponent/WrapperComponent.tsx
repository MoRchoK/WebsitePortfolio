import styled from "styled-components";



type WrapperComponentPropsType = {
    flexdirection?: string,
    alignitems?: string,
    flexwrap?: string,
    justifycontent?: string,
    width?: string
    height?: string,
    gap?: string,
    margin_bottom?: string,


}


export const WrapperComponent = styled.div<WrapperComponentPropsType>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'column'};
    justify-content: ${(props) => props.justifycontent || 'flex-start'};
    align-items: ${(props) => props.alignitems || 'stretch'};
    flex-wrap: ${(props) => props.flexwrap || 'nowrap'};
    max-width: ${(props) => props.width || '100%'};
    width: 100%;
    height: ${(props) => props.height || '100%'};
    gap: ${(props) => props.gap || '0'};
    margin-bottom: ${(props) => props.margin_bottom || '0'};
    border: 1px red solid;
    
`