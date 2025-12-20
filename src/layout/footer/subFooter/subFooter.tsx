import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import {S} from "../footer_styled/footer_styled.ts";
import {socialItemsType} from "../Footer.tsx";


type SubFooterPropsType = {
    socialItems: Array<socialItemsType>
}

export const SubFooter: React.FC<SubFooterPropsType> = (props: SubFooterPropsType) => {
    return (
        <S.SocialSubsection alignitems={'center'} justifycontent={'space-between'}>
            <S.Footnote>
                © 2021 <S.FooterAccent>Templates Jungle.</S.FooterAccent> All rights reserved
            </S.Footnote>
            <S.SocialList>
                {props.socialItems.map((icon, index) => (
                    <S.SocialItem key={index}>
                        <S.SocialLink>
                            <SvgIcon
                                id={icon.name}
                                viewBox={icon.viewBox}
                            >
                            </SvgIcon>
                        </S.SocialLink>
                    </S.SocialItem>
                ))}
            </S.SocialList>
        </S.SocialSubsection>
    )
}






