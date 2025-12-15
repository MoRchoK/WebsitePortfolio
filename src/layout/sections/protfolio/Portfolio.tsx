import styled from "styled-components";
import {BtnDarkStyled, ButtonDark} from "../../../components/buttonDark/Button.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {Title} from "../../../components/title/Title.tsx";
import {PortfolioMenu} from "./portfolioMenu/PortfolioMenu.tsx";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {font} from "../../style/common/Common.ts";
import {PortfolioPost} from "./portfolioPost/PortfoloPost.tsx";

export function Portfolio() {


    return (
        <PortfolioStyles>
            <WrapperComponent width={'1920px'} flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
                <Title title={"Portfolio"}/>
                <PortfolioMenu/>
                <PortfolioPost/>
                <ButtonDark title={'VIEW PORTFOLIO'}/>
            </WrapperComponent>
        </PortfolioStyles>
    )
}


const PortfolioStyles = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 150px;

    h2 {
        margin-bottom: 55px;
    }
    a {
        ${font({Fmax: 20, Fmin: 16})}
    }
    nav {
        height: auto;
        margin-bottom: 65px;
    }
    ${BtnDarkStyled} {
        max-width: 210px;
        margin-top: 60px
    }
    @media ${myTheme.media.large} {
        padding-bottom: 100px;
    }

    @media ${myTheme.media.mobile} {
        ul {
            gap: 20px;
        }
        ${BtnDarkStyled} {
            padding: 1em 1.5em;
            font-size: 14px;
            margin-top: 30px
        }
    }
`

