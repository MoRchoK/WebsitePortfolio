import {Container} from "../../container/Container.ts";
import {S} from "./footer_styled/footer_styled.ts";
import {FooterMain} from "./footerMain/FooterMain.tsx";
import {SubFooter} from "./subFooter/subFooter.tsx";




export type socialItemsType = {
    name: string,
    viewBox: string
}
const socialItems: Array<socialItemsType> = [
    {
        name: 'facebook',
        viewBox: "0 0 24 24"
    },
    {
        name: 'twitter',
        viewBox: '0 0 1024 1024'
    },
    {
        name: 'instagram',
        viewBox: "-271 273 256 256"
    },
    {
        name: 'pinterest',
        viewBox: "0 0 24 24"
    },
    {
        name: 'dribble',
        viewBox: "0 0 32 32"
    },
    {
        name: 'youtube',
        viewBox: "0 0 1024 1024"
    }]


type FooterPropsType = {
    setIsActive: (value:boolean)=>void
}
export const Footer: React.FC<FooterPropsType> = (props: FooterPropsType) => {

    return (
        <S.Footer id={'contact'}>
            <Container>
                <S.WrapperFooter  flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
                    <FooterMain setIsActive={props.setIsActive} />
                    <SubFooter  socialItems={socialItems}/>
                </S.WrapperFooter>
            </Container>
        </S.Footer>
    )
}









