import {myTheme} from "../../../layout/style/Theme/Theme.styled.tsx";
import {font} from "../../../layout/style/common/Common.ts";
import styled, {css} from "styled-components";
import {Wrapper} from "../../wrapperComponent/Wrapper.tsx";




type ModalContactPropsType = {
    $isOpen: boolean;
}

const ModalContact = styled.div<ModalContactPropsType>`
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${myTheme.colors.BgHeader};
    border: none;
    z-index: 9999999;
    min-width: 360px;
    min-height: 360px;
    ${props => props.$isOpen && css <{ $isOpen: boolean }>`
        display: flex;
    `};
`

export const Form = styled.form`
    max-width: 800px;
    padding: 100px;
    width: 60vw;
    min-height: 360px;
    max-height: 900px;
    height: 80vh;
    min-width: 360px;
    gap: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.BgBrandsSection};
    border-radius: 30px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);
    
    button {
        max-width: 150px;
        width: 100%;
        margin-bottom: 0;
        @media screen and (max-height: 700px), ${myTheme.media.mobile} {
            max-width: 100px;
            max-height: 35px;
            
        }
    }

    @media ${myTheme.media.large} {
        width: 80vw;
    }

    @media screen and (max-height: 700px), ${myTheme.media.mobile} {
        max-width: 100vw;
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }

    @media ${myTheme.media.mobile} {
        padding: 0 50px;
        gap: 40px;
    }
`

const Textarea = styled.textarea`
    width: 100%;
    min-height: 130px;
    resize: none;
    border: 2px solid ${myTheme.colors.PraymaryText};
    @media screen and (max-height: 700px), ${myTheme.media.mobile} {
        min-height: 100px;
    }
`

const WrapperInput = styled(Wrapper)`
    width: 100%;
    flex-direction: column;
    justify-content: end;
    position: relative;
    input {
        ${font({Fmax: 24, Fmin: 12, family: 'Lato, sans-serif'})}
        padding: 0 5px;
        width: 100%;
        height: 30px;
        outline: none;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${myTheme.colors.PraymaryText};
        &:focus-visible {
            border-color: ${myTheme.colors.highlighting}
        }
        &::placeholder {
            opacity: 0;
            @media screen and (max-height: 700px), ${myTheme.media.mobile} {
                opacity: 1;
            }
        }
        &:hover + label {
            transform: translateY(-2rem);
            font-size: 10px;
        }
        &:not(:placeholder-shown) + label {
            display: none;
        }
    }
    label {
        ${font({Fmax: 20, Fmin: 12, family: 'Lato, sans-serif'})}
        position: absolute;
        left: 5px;
        transition: .1s;
        opacity: .8;
        top: -30%;
        user-select: none;
        @media screen and (max-height: 700px), ${myTheme.media.mobile} {
            display: none;
        }
    }
    
`



export const S = {
    ModalContact,
    Form,
    Textarea,
    WrapperInput

}