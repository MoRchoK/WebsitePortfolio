import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import styled from "styled-components";
import {PortfolioMenu} from "./portfolioMenu/PortfolioMenu.tsx";
import {ButtonDark} from "../../../components/buttonDark/Button.tsx";
import bgOneImg from "../../../image/RectangleR.webp";
import bgTwoImg from "../../../image/Rectangle89.webp";
import bgThreeImg from "../../../image/Rectangle87.webp";
import bgFourImg from "../../../image/Rectangle79.webp";
import bgfiveImg from "../../../image/Rectangle92.webp";
import bgSixImg from "../../../image/Rectangle78.webp";
import {Container} from "../../../container/Container.ts";
import {MenuLink} from "../../../components/menu/Menu.tsx";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";


export function Portfolio() {

    return (
        <PortfolioStyles>
            <Container>
                <TitleComponent alignment={'center'} mgbttitle={'55px'} title={"Portfolio"}/>
                <PortfolioMenu/>
                <PortfolioPost/>
                <ButtonDark title={'VIEW PORTFOLIO'}/>
            </Container>
        </PortfolioStyles>

    )
}


const PortfolioStyles = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;

    nav {
        display: flex;
        justify-content: center;

        ${MenuLink} {
            color: ${myTheme.colors.descriptionCard};
        }

        ${MenuLink}:hover {
            color: ${myTheme.colors.PraymaryText};
        }
    }
    ${Container} {
        display: flex;
        flex-direction: column;
    }



`

function PortfolioPost() {
    const portfolioItems = [bgOneImg, bgSixImg, bgThreeImg, bgFourImg, bgfiveImg, bgTwoImg,]
    let positionPost: number = 0
    return (
        <WrapperPrortfolio>
            {portfolioItems.map((item, i) => {
                if (i + 1 <= 3) {
                    if ((i + 1) % 2 === 0) {
                        return <PortfolioPostStyled key={i} grid_row_start={1} grid_row_end={3}
                                                    grid_column_start={i + 1}
                                                    backgroundimage={item}/>
                    } else {
                        return <PortfolioPostStyled key={i} grid_row_start={1} grid_row_end={2}
                                                    grid_column_start={i + 1}
                                                    backgroundimage={item}/>
                    }
                } else {
                    if ((i % 2) === 0) {
                        positionPost++
                        return <PortfolioPostStyled key={i} grid_row_start={3} grid_row_end={4}
                                                    grid_column_start={positionPost}
                                                    backgroundimage={item}/>
                    } else {
                        positionPost++
                        return <PortfolioPostStyled key={i} grid_row_start={2} grid_row_end={4}
                                                    grid_column_start={positionPost}
                                                    backgroundimage={item}/>
                    }
                }
            })}
        </WrapperPrortfolio>
    )
}


const WrapperPrortfolio = styled.div`
    display: grid;
    width: 100%;
    height: 900px;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: 5%;
`

type PortfolioPostStyledPropsType = {
    backgroundimage?: string
    grid_row_start: number
    grid_row_end: number
    grid_column_start: number

}


const PortfolioPostStyled = styled.div<PortfolioPostStyledPropsType>`
    background-image: url(${(props) => props.backgroundimage});
    background-size: cover;
    background-position: center;
    grid-row-start: ${(props) => props.grid_row_start};
    grid-row-end: ${(props) => props.grid_row_end};
    grid-column-start: ${(props) => props.grid_column_start};
`;

