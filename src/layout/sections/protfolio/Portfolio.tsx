import {BtnDark} from "../../../components/buttonDark/ButtonDark.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {Title} from "../../../components/title/Title.tsx";
import {S} from "./portfolio_styled/Portfolio_Styled.ts";
import {PortfolioPost} from "./portfolioPost/PortfoloPost.tsx";
import {useState} from "react";
import {Menu} from "../../../components/menu/Menu.tsx";




export function Portfolio() {
    const TabItems: Array<string> = ['All', 'Branding', 'Shirt', 'Pakage', 'Poster']
    const [activeItem, setActiveItem] = useState<string>('All')
    return (
        <S.PortfolioSection>
            <Wrapper flexdirection={'column'} alignitems={'center'} justifycontent={'center'}>
                <Title title={"Portfolio"}/>
                <Menu $setActiveItem={(item:string)=>setActiveItem(item)} title={TabItems} $activeItem={activeItem} gap={'50px'} tagName={'button'} />
                <PortfolioPost activeTab={activeItem}/>
                <BtnDark>VIEW PORTFOLIO</BtnDark>
            </Wrapper>
        </S.PortfolioSection>
    )
}
