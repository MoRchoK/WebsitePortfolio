import {ButtonLight} from "../buttonLight/ButtonLight.tsx";
import {S} from "./modalConact_styled/ModalCotact_Styled.ts";
import {BtnDark} from "../buttonDark/ButtonDark.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";


type ModalContactPropsType = {
    $isOpen: boolean;
    $setIsActive: (isOpen: boolean) => void;
}

export function ModalContact({$isOpen, $setIsActive}: ModalContactPropsType) {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) {
            return
        }
        emailjs
            .sendForm('service_3c584l9', 'template_28jg75q', form.current, {
                publicKey: '1dtZkadI_bIIMZHDp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error: any) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <S.ModalContact $isOpen={$isOpen}>
            <S.Form ref={form} onSubmit={sendEmail}>
                <S.WrapperInput>
                    <input name="user_name" required id={'Name'} type={'text'}
                           placeholder={'Your Full Name (Required)'}/>
                    <label htmlFor={'Name'}>Your Full Name (Required)</label>
                </S.WrapperInput>
                <S.WrapperInput>
                    <input name="user_email" required id={'Email'} type={'Email'}
                           placeholder={'Your Email (Required)'}/>
                    <label htmlFor={'Email'}>Your Email (Required)</label>
                </S.WrapperInput>
                <S.Textarea name="message" required id={'Message'}/>
                <S.BntWrapperContacts alignitems={'center'} justifycontent={'center'} gap={'30px'}>
                    <ButtonLight type="submit">Submit</ButtonLight>
                    <BtnDark onClick={(e) => {
                        e.preventDefault();
                        $setIsActive(false)
                    }}>Cancel</BtnDark>
                </S.BntWrapperContacts>
            </S.Form>
        </S.ModalContact>
    )
}

