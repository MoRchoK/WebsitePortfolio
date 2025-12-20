import {ButtonLight} from "../buttonLight/ButtonLight.tsx";
import {S} from "./modalConact_styled/ModalCotact_Styled.ts";
import {BtnDark} from "../buttonDark/ButtonDark.tsx";
import {Wrapper} from "../wrapperComponent/Wrapper.tsx";


type ModalContactPropsType = {
    $isOpen: boolean;
    $setIsActive: (isOpen: boolean) => void;
}

export function ModalContact({$isOpen, $setIsActive}: ModalContactPropsType) {
    return (

        <S.ModalContact $isOpen={$isOpen}>
            <S.Form>
                    <S.WrapperInput>
                        <input id={'Name'} type={'text'} placeholder={'Your Full Name (Required)'}/>
                        <label htmlFor={'Name'}>Your Full Name (Required)</label>
                    </S.WrapperInput>
                    <S.WrapperInput>
                        <input id={'Email'} type={'Email'} placeholder={'Your Email (Required)'}/>
                        <label htmlFor={'Email'}>Your Email (Required)</label>
                    </S.WrapperInput>
                    <S.Textarea id={'Message'}/>
                    <Wrapper alignitems={'center'} justifycontent={'center'} gap={'30px'}>
                        <ButtonLight type="submit">Submit</ButtonLight>
                        <BtnDark onClick={(e) => {
                            e.preventDefault();
                            $setIsActive(false)
                        }}>Cancel</BtnDark>
                    </Wrapper>
            </S.Form>
        </S.ModalContact>
    )
}


