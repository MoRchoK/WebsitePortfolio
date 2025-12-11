import styled from "styled-components";
import {BtnDarkStyled, ButtonDark} from "../../../components/buttonDark/Button.tsx";
import bgOneImg from "../../../image/RectangleR.webp";
import bgTwoImg from "../../../image/Rectangle89.webp";
import bgThreeImg from "../../../image/Rectangle87.webp";
import bgFourImg from "../../../image/Rectangle79.webp";
import bgfiveImg from "../../../image/Rectangle92.webp";
import bgSixImg from "../../../image/Rectangle78.webp";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {Title} from "../../../components/title/Title.tsx";
import {PortfolioMenu} from "./portfolioMenu/PortfolioMenu.tsx";


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

    nav {
        height: auto;
        margin-bottom: 65px;
    }

    ${BtnDarkStyled} {
        max-width: 210px;
        margin-top: 60px

    }
`

function PortfolioPost() {
    const portfolioItems = [bgOneImg, bgTwoImg,bgThreeImg,bgFourImg,bgfiveImg,bgSixImg]
    const culoms_value: number = (portfolioItems.length>=3)? 3: portfolioItems.length
    let iterCount: number = 1
    let chetOrno = 1
    let columnPosition = 0
    const rows_count = setGridTempleteRows(portfolioItems)


    function setGridTempleteRows(array: Array<string>) {
        let templeteRows = ''

        if (array.length % 6 === 0) {
            for (let i = 0; i < Math.floor(array.length / 6); i++) {
                templeteRows = templeteRows + '540px 200px 540px '
            }
        } else {
            for (let i = 0; i < Math.ceil(array.length / 3); i++) {
                templeteRows = templeteRows + '540px '
            }
        }
        return templeteRows
    }

    return (
        <WrapperPrortfolio culoms_value={culoms_value} rows_count={rows_count}>
            {portfolioItems.map((post, index) => {
                    columnPosition++

                    if (portfolioItems.length % 6 === 0) {
                        if (columnPosition === 4) {
                            columnPosition = 1
                            chetOrno++
                            if (index % 6 === 0) {
                                iterCount = iterCount + 2
                            } else {
                                iterCount++
                            }
                        }
                        if (chetOrno % 2 === 0) {
                            if (columnPosition % 2 === 0) {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount + 1}
                                                            grid_row_end={iterCount + 2}
                                                            grid_column_start={columnPosition} backgroundimage={post}/>
                            } else {

                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 2}
                                                            grid_column_start={columnPosition} backgroundimage={post}/>
                            }
                        } else {
                            if (columnPosition % 2 === 0) {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 2}
                                                            grid_column_start={columnPosition} backgroundimage={post}/>
                            } else {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 1}
                                                            grid_column_start={columnPosition} backgroundimage={post}/>
                            }
                        }
                    } else {
                        if (columnPosition === 4) {
                            columnPosition = 1
                            iterCount++
                        }

                        return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                    grid_row_end={iterCount + 1}
                                                    grid_column_start={columnPosition} backgroundimage={post}/>

                    }
                }
            )}
        </WrapperPrortfolio>
    )
}


type WrapperPrortfolioPropsType = {
    rows_count: string
    culoms_value: number
}
const WrapperPrortfolio = styled.div<WrapperPrortfolioPropsType>`
    display: grid;
    width: 100%;
    min-height: 550px;
    gap: 30px;
    grid-template-columns: repeat( ${(props) =>
            props.culoms_value
    }, 1fr);
    grid-template-rows: ${props => props.rows_count}
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
    max-height: 800px;
`;

