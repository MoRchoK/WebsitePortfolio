import styled, {css} from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {ButtonLight} from "../buttonLight/ButtonLight.tsx";
import {WrapperComponent} from "../wrapperComponent/WrapperComponent.tsx";
import {BtnDark} from "../buttonDark/ButtonDark.tsx";
import {font} from "../../layout/style/common/Common.ts";





export function ModalContact(props:WrapperModal) {
    return (
        <WrapperModal isOpen={props.isOpen}>
            <Form>
                <WrapperInput>
                    <input id={'Name'} type={'text'} placeholder={'Your Full Name (Required)'}/>
                    <label htmlFor={'Name'}>Your Full Name (Required)</label>
                </WrapperInput>
                <WrapperInput>
                    <input id={'Email'} type={'Email'} placeholder={'Your Email (Required)'}/>
                    <label htmlFor={'Email'}>Your Email (Required)</label>
                </WrapperInput>
                <WrapperInput>
                    <textarea id={'Message'} placeholder={'Your Message'}/>
                    <label htmlFor={'Message'}>Your Message</label>
                </WrapperInput>
                <WrapperComponent className={'WrapperBtnModal'} flexdirection={'row'} justifycontent={'center'} gap={'30px'}>
                    <ButtonLight type="submit">Submit</ButtonLight>
                    <BtnDark onClick={props.handle_click}>Cancel</BtnDark>
                </WrapperComponent>
            </Form>
        </WrapperModal>
    )
}



type WrapperModal = {
    isOpen: boolean;
    handle_click?: () => void;
}

const WrapperModal = styled.div<WrapperModal>`
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
    .WrapperBtnModal{
        height: auto;
    }
    ${props => props.isOpen && css <{ isOpen: boolean }>`
        display: flex;

    `}

`
export const Form = styled.form`
    max-width: 800px;
    padding: 50px;
    width: 60vw;
    min-height: 360px;
    max-height: 900px;
    height: 80vh;
    gap: 50px;
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
        max-height: 40px;
    }
    @media ${myTheme.media.large} {
        width: 80vw;
    }
    
    @media ${myTheme.media.mobile} {
        padding-top: 100px;
        gap: 30px;
        button {
           padding: 0.5rem 1rem;
           max-width: 100px;
        }
    }

    @media screen and (max-height: 500px)  {
        width: 100vw;
        height: 100vh;
        gap: 30px;
        border-radius: 0;
    }
    
`

const WrapperInput = styled.div`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;

    input, textarea {
        ${font({Fmax: 24, Fmin: 12, family: 'Lato, sans-serif'})}
        padding: 0 5px;
        width: 100%;
        height: 100%;
        outline: none;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${myTheme.colors.PraymaryText};

        &:focus-visible {
            border-color: ${myTheme.colors.highlighting}
        }
    }

    textarea {
        min-height: 130px;
        resize: none;
        border: 1px solid ${myTheme.colors.PraymaryText};
    }

    label {
        ${font({Fmax: 20, Fmin: 12, family: 'Lato, sans-serif'})}
        position: absolute;
        left: 5px;
        transition: .1s;
        opacity: .8;
        top: 0;
        user-select: none;
    }


    input::placeholder,
    textarea::placeholder {
        opacity: 0;
    }

    input:hover + label,
    textarea:hover + label {
        transform: translateY(-1.5rem);
        font-size: 10px;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        display: none;
    }
`

