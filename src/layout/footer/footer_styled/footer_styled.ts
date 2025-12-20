import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {font} from "../../style/common/Common.ts";


const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${myTheme.colors.secondarySection};
    padding: 170px 50px 0;

    @media ${myTheme.media.mobile} {
        padding: 130px 20px 0;
    }
`
const WrapperFooter = styled(Wrapper)`
    position: relative;
    width: 100%;
    h2 {
        ${font({Fmax: 72, Fmin: 40, lineHeight: 0.8, letterSpacing: '0.01em'})}
        text-align: center;
        margin-bottom: 30px;
    }
    p {
        margin-bottom: 60px;
        max-width: 460px;
        width: 100%;
    }
    button {
        margin-bottom: 100px;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 115px;
        z-index: 2;
        left: -45px;
        background-color: ${myTheme.colors.footerLine};
        height: 1px;
        width: calc(100% + 90px);
        @media ${myTheme.media.mobile} {
            left: -10px;
            width: calc(100% + 20px);
        }
    }
    @media ${myTheme.media.mobile} {
        button {
            padding: 1em 2em;
        }
    }
`



//Social Section


const SocialList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    @media ${myTheme.media.tablet} {
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`
const SocialItem = styled.li`
    width: 20px;
    svg {
        width: 20px;
    }
`
const SocialLink = styled.a`
    cursor: pointer;
    color: ${myTheme.colors.borderFooterBtn};

    &:hover {
        color: ${myTheme.colors.highlighting};
    }

    @media ${myTheme.media.mobile} {
        svg {
            width: 20px;
        }
    }
`

const SocialSubsection = styled(Wrapper)`
    padding: 0 60px;
    width: 100%;
    min-height: 115px;
    @media ${myTheme.media.tablet} {
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    @media ${myTheme.media.mobile} {
        padding: 0;
    }
`
const Footnote = styled.small`
    ${font({weight: 400, family: ' Lato, sans-serif', color: myTheme.colors.descriptionFooterText})}
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media ${myTheme.media.tablet} {
        width: 100%;
        justify-content: center;
    }
`

const FooterAccent = styled.span`
    color: ${myTheme.colors.PraymaryText};
`



export const  S = {
    Footer,
    WrapperFooter,
    SocialList,
    SocialItem,
    SocialLink,
    SocialSubsection,
    Footnote,
    FooterAccent,
}