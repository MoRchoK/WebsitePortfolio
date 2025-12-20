import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {BtnStyled} from "../../../components/btnStyled/BtnStyled.tsx";


type FooterMainPropsType = {
    setIsActive: (isActive: boolean) => void;
}

export const FooterMain: React.FC<FooterMainPropsType> = (props: FooterMainPropsType) => {
    return (
        <Wrapper flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
            <TitleSection
                description={'I’m available for freelance work. Have any projects in your mind? Just feel free to contact me'}
                title={'Let’s work together'}/>
            <BtnStyled
                as={'button'}
                onClick={() => {
                    props.setIsActive(true)
                }}
            >CONTACT ME</BtnStyled>
        </Wrapper>
    )
}