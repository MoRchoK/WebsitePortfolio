import styled from "styled-components";



type WrapperComponentPropsType = {
    flexdirection?: string,
    alignitems?: string,
    flexwrap?: string,
    justifycontent?: string,
    gap?: string,
}


export const WrapperComponent = styled.div<WrapperComponentPropsType>`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || "row" };
    justify-content: ${(props) => props.justifycontent};
    align-items: ${(props) => props.alignitems };
    flex-wrap: ${(props) => props.flexwrap};
    gap: ${(props) => props.gap};
    height: 100%;
`