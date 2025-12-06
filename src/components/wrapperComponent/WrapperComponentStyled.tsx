import styled from "styled-components";


type WrapperComponentPropsType = {
    flexdirection?: string,
    alignitems?: string,
    flexwrap?: string,
    justifycontent?: string,
    width?: string
    position?: string,
    left?: string,
    marginbottom?: string,
    height?: string,
    gap?: string,
    paddingtop?: string,

}


export const WrapperComponentStyled = styled.div<WrapperComponentPropsType>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'column'};
    justify-content: ${(props) => props.justifycontent || 'flex-start'};
    align-items: ${(props) => props.alignitems || 'stretch'};
    flex-wrap: ${(props) => props.flexwrap || 'nowrap'};
    width: ${(props) => props.width || 'auto'};
    position: ${(props) => props.position || 'static'};
    left: ${(props) => props.left || '0'};
    z-index: 0;
    margin-bottom: ${(props) => props.marginbottom || '0'};
    height: ${(props) => props.height || 'auto'};
    gap: ${(props) => props.gap || '0'};
    padding-top: ${(props) => props.paddingtop || '0'};
    
    

`