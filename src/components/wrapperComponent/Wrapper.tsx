import styled from "styled-components";



type WrapperPropsType = {
    flexdirection?: string,
    alignitems?: string,
    flexwrap?: string,
    justifycontent?: string,
    gap?: string,
    height?: string,
}


export const Wrapper = styled.div<WrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || "row" };
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems };
    flex-wrap: ${(props) => props.flexwrap};
    gap: ${(props) => props.gap};
    height: ${(props) => props.height || '100%'};
`