import styled, {css} from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";
import {ButtonLight} from "../buttonLight/ButtonLight.tsx";
import {WrapperComponent} from "../wrapperComponent/WrapperComponent.tsx";
import {ButtonDark} from "../buttonDark/Button.tsx";





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
                <WrapperComponent flexdirection={'row'} justifycontent={'center'} gap={'30px'}>
                    <ButtonLight title={'Submit'} type="submit"/>
                    <ButtonDark  handleClick={props.handleClick} title={'Cancel'}/>
                </WrapperComponent>
            </Form>
        </WrapperModal>
    )
}



type WrapperModal = {
    isOpen: boolean;
    handleClick?: () => void;

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
${props=>props.isOpen && css <{isOpen: boolean }>`
display: flex;

`}

`
export const Form = styled.form`
    padding: 150px 40px 100px;
    min-width: 800px;
    display: flex;
    gap: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: ${myTheme.colors.BgBrandsSection};
    border-radius: 10%;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);

    button {
        max-width: 200px;
        width: 100%;
    }
`


const WrapperInput = styled.div`
    max-width: 540px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;

    input, textarea {
        padding: 0 5px;
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 24px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${myTheme.colors.PraymaryText};

        &:focus-visible {
            border-color: ${myTheme.colors.highlighting}
        }
    }

    textarea {
        min-height: 155px;
        resize: none;
        border: 1px solid ${myTheme.colors.PraymaryText};
    }

    label {
        font-size: 24px;
        font-family: Lato, sans-serif;
        color: ${myTheme.colors.PraymaryText};
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
        font-size: 12px;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        display: none;
    }
`

