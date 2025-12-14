import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


export function ButtonDark(props: ButtonPropsType) {
    return (
        <BtnDarkStyled handleClick={props.handleClick} type={props.type} mg_bottom={props.mg_bottom} title={props.title}>{props.title}</BtnDarkStyled>)
}


export type ButtonPropsType = BtnDarkPopsType & {
    title: string,


}
type BtnDarkPopsType = {
    mg_bottom?: string
    type?: string
    even?: boolean
    handleClick?: () => void
}

export const BtnDarkStyled = styled.button.attrs<BtnDarkPopsType>(({handleClick})=>({
    onClick: (e) => {
        e.preventDefault()
        if(handleClick){
            handleClick()
        }
    }
}))<BtnDarkPopsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.PraymaryText};
    padding: 1em 1.5em;
    color: ${myTheme.colors.whteColor};
    font-size: 16px;
    margin-bottom: ${props => props.mg_bottom};
    font-family: Raleway, sans-serif;
    font-weight: 500;
    letter-spacing: 0.03em;
    white-space: nowrap;

    @media ${myTheme.media.mobile} {
        padding: 0.5em 1em;
    }
`

