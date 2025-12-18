import bgOneImg from "../../../../assets/image/RectangleR.webp";
import bgTwoImg from "../../../../assets/image/Rectangle89.webp";
import bgThreeImg from "../../../../assets/image/Rectangle87.webp";
import bgFourImg from "../../../../assets/image/Rectangle79.webp";
import bgfiveImg from "../../../../assets/image/Rectangle92.webp";
import bgSixImg from "../../../../assets/image/Rectangle78.webp";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";
import {TabItemsType} from "../Portfolio.tsx";



type PortfolioPostPropsType = {
    activeTab: TabItemsType;
}

export function PortfolioPost(props: PortfolioPostPropsType) {
    const portfolioItems = [bgOneImg, bgTwoImg, bgThreeImg, bgFourImg, bgfiveImg, bgSixImg]

    const portfolioPosts: Array<portfolioPostsType> = [
        {
            img: bgOneImg,
            title: 'Ultra Jot Coffee',
             type: 'Branding'
        },
        {
            img: bgTwoImg,
            title: 'Juice Bottle',
             type: 'Pakage'
        },
        {
            img: bgThreeImg,
            title: 'Wedding Ring',
             type: 'Shirt'
        },
        {
            img: bgFourImg,
            title: 'natural cosmetics',
             type: 'Poster'
        },
        {
            img: bgfiveImg,
            title: 'designer chair',
            type: 'Branding'
        },
        {
            img: bgSixImg,
            title: 'sports shoes',
            type: 'Poster'
        },
        {
            img: bgTwoImg,
            title: 'Juice Bottle',
            type: 'Shirt'
        },
        {
            img: bgThreeImg,
            title: 'Wedding Ring',
            type: 'Shirt'
        },
        {
            img: bgFourImg,
            title: 'natural cosmetics',
            type: 'Pakage'
        },
        {
            img: bgfiveImg,
            title: 'designer chair',
            type: 'Branding'
        },
        {
            img: bgSixImg,
            title: 'sports shoes',
            type: 'Pakage'
        },
        {
            img: bgSixImg,
            title: 'sports shoes',
            type: 'Pakage'
        },
    ]


    const portfolioPostsActive = portfolioPosts.filter((item) =>
        props.activeTab === 'All'? item.type: item.type === props.activeTab
    )


    type portfolioPostsType = {
        img: string,
        title: string,
        type: TabItemsType
    }

    const culoms_value: number = 3
    let iterCount: number = 1
    let chetOrno = 1
    let columnPosition = 0
    const rows_count = setGridTempleteRows(portfolioItems)

    function setGridTempleteRows(array: Array<string>) {
        let templeteRows = ''
        let cout = 0
        if (portfolioItems.length >= 3) {
            for (let i = 1; i <= Math.ceil(array.length / 3); i++) {
                if (i % 2 === 0) {
                    templeteRows = templeteRows + ' 200px 540px '
                    cout = cout + 2
                } else {
                    templeteRows = templeteRows + ' 540px '
                    cout = cout + 1
                }
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
            {portfolioPostsActive.map((post, index) => {
                    columnPosition++
                    if (portfolioItems.length >= 3) {
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
                                return (
                                    <PortfolioPostStyled key={index} grid_row_start={iterCount + 1}
                                                         grid_row_end={iterCount + 2}
                                                         grid_column_start={columnPosition}>
                                        <img src={post.img} alt={post.title}/>
                                        <OverleyPost title={post.title}/>
                                    </PortfolioPostStyled>
                                )
                            } else {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 2}
                                                            grid_column_start={columnPosition}>
                                    <img src={post.img} alt={post.title}/>
                                    <OverleyPost title={post.title}/>
                                </PortfolioPostStyled>
                            }
                        } else {
                            if (columnPosition % 2 === 0) {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 2}
                                                            grid_column_start={columnPosition}>
                                    <img src={post.img} alt={post.title}/>
                                    <OverleyPost title={post.title}/>
                                </PortfolioPostStyled>
                            } else {
                                return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                            grid_row_end={iterCount + 1}
                                                            grid_column_start={columnPosition}>
                                    <img src={post.img} alt={post.title}/>
                                    <OverleyPost title={post.title}/>
                                </PortfolioPostStyled>
                            }
                        }
                    } else {
                        if (columnPosition === 4) {
                            columnPosition = 1
                            iterCount++
                        }
                        return <PortfolioPostStyled key={index} grid_row_start={iterCount}
                                                    grid_row_end={iterCount + 1}
                                                    grid_column_start={columnPosition}>
                            <img src={post.img} alt={post.title}/>
                            <OverleyPost title={post.title}/>
                        </PortfolioPostStyled>

                    }
                }
            )}
        </WrapperPrortfolio>
    )
}


function OverleyPost({title}: {title: string}) {

    return (
        <WrapperOverlay>
            <OverlayTitle>{title}</OverlayTitle>
            <OverlayDescription>Package Design</OverlayDescription>
        </WrapperOverlay>

    )
}

const WrapperOverlay = styled.div`
    display: none;
    position: absolute;
    bottom: 100px;
    left: 60px;
    flex-direction: column;
    gap: 35px;
    
`

const OverlayTitle = styled.h4`
    ${font({color: myTheme.colors.BgMainSection, Fmax:26, Fmin: 20})}
    text-transform: capitalize;
    &::before {
        content: '➝';
        position: absolute;
        right: -130px;
        transform: scale(1.3);
        color: ${myTheme.colors.BgMainSection}
    }
`

const OverlayDescription = styled.span`
    ${font({color: myTheme.colors.BgMainSection, weight: 400})};
    font-size: 16px;
    padding-left: 5px;
`

type WrapperPrortfolioPropsType = {
    rows_count: string
    culoms_value: number
}
const WrapperPrortfolio = styled.div<WrapperPrortfolioPropsType>`
    display: grid;
    width: 100%;
    min-height: 200px;
    gap: 30px;
    grid-template-columns: repeat( ${(props) =>
            props.culoms_value
    }, 1fr);
    grid-template-rows: ${props => props.rows_count};

    @media ${myTheme.media.large} {
        grid-template-columns: repeat( ${(props) =>
                props.culoms_value === 3 ? props.culoms_value - 1 : props.culoms_value
        }, 1fr);
        grid-template-rows: 540px;
        grid-auto-rows: 540px;
    }

    @media ${myTheme.media.tablet} {
        grid-template-columns: repeat( 1, 1fr);
    }
`
type PortfolioPostStyledPropsType = {
    backgroundimage?: string
    grid_row_start: number
    grid_row_end: number
    grid_column_start: number
}

const PortfolioPostStyled = styled.div<PortfolioPostStyledPropsType>`
    width: 100%;
    height: 100%;
    grid-row-start: ${(props) => props.grid_row_start};
    grid-row-end: ${(props) => props.grid_row_end};
    grid-column-start: ${(props) => props.grid_column_start};
    max-height: 800px;
    position: relative;
    &:hover {
        &::before {
            content: '';
            background-color: ${myTheme.colors.bgHoverPortfolioPost};
            width: 100%;
            height: 100%;
            position: absolute;
        }
        ${WrapperOverlay}{
            display: flex;
        }
    }
    @media ${myTheme.media.large} {
        grid-row-start: auto ;
        grid-row-end: auto;
        grid-column-start: auto;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

