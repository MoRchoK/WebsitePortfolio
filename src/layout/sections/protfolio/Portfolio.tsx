import styled from "styled-components";
import {BtnDark} from "../../../components/buttonDark/ButtonDark.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {Title} from "../../../components/title/Title.tsx";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {PortfolioPost} from "./portfolioPost/PortfoloPost.tsx";
import {useState} from "react";
import {Menu} from "../../../components/menu/Menu.tsx";


export type TabItemsType = 'All' | 'Branding' | 'Shirt' | 'Pakage' | 'Poster'

export function Portfolio() {

    const TabItems: Array<TabItemsType> = ['All', 'Branding', 'Shirt', 'Pakage', 'Poster']
    const [activeItem, setActiveItem] = useState<TabItemsType>('All')

    return (
        <PortfolioStyles>
            <Wrapper flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
                <Title title={"Portfolio"}/>
                <Menu $setActiveItem={(item:TabItemsType)=>setActiveItem(item)} title={TabItems} $activeItem={activeItem} gap={'50px'} tagName={'button'} />
                <PortfolioPost activeTab={activeItem}/>
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


    nav {
        height: auto;
        margin-bottom: 65px;

        li {

        }

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

