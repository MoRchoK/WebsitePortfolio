import styled from "styled-components";
import {BtnDark} from "../../../components/buttonDark/ButtonDark.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {Title} from "../../../components/title/Title.tsx";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {font} from "../../style/common/Common.ts";
import {PortfolioPost} from "./portfolioPost/PortfoloPost.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

export function Portfolio() {
    const portfilioItems = ['All', 'Branding', 'Shirt', 'Pakage', 'Poster']
    return (
        <PortfolioStyles>
            <Wrapper flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
                <Title title={"Portfolio"}/>
                <Menu title={portfilioItems} gap={'50px'}/>
                <PortfolioPost/>
                <BtnDark>VIEW PORTFOLIO</BtnDark>
            </Wrapper>
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

    ${BtnDark} {
        max-width: 210px;
        width: 100%;
        height: 56px;
        margin-top: 60px
    }

    @media ${myTheme.media.large} {
        padding-bottom: 100px;
    }

    @media ${myTheme.media.mobile} {
        ul {
            gap: 20px;
        }

        ${BtnDark} {
            padding: 1em 1.5em;
            font-size: 14px;
            margin-top: 30px;
        }
    }
`

