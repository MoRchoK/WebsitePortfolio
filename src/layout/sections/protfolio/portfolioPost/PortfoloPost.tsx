import bgOneImg from "../../../../assets/image/RectangleR.webp";
import bgTwoImg from "../../../../assets/image/Rectangle89.webp";
import bgThreeImg from "../../../../assets/image/Rectangle87.webp";
import bgFourImg from "../../../../assets/image/Rectangle79.webp";
import bgfiveImg from "../../../../assets/image/Rectangle92.webp";
import bgSixImg from "../../../../assets/image/Rectangle78.webp";
import {S} from "../portfolio_styled/Portfolio_Styled.ts";
import {OverleyPost} from "./overleyPost/OverleyPost.tsx";
import {AnimatePresence} from 'framer-motion';


type PortfolioPostPropsType = {
    activeTab: string;
}

type portfolioPostsType = {
    img: string,
    title: string,
    type: string,
}
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

]


export function PortfolioPost(props: PortfolioPostPropsType) {
    const portfolioPostsActive = portfolioPosts.filter((item) =>
        props.activeTab === 'All' ? item.type : item.type === props.activeTab
    )
    let iterCount: number = 1
    let chetOrno = 1
    let columnPosition = 0
    const rows_count = setGridTempleteRows(portfolioPostsActive)

    function setGridTempleteRows(array: Array<portfolioPostsType>) {
        let templeteRows = ''
        if (array.length >= 3) {
            for (let i = 1; i <= Math.ceil(array.length / 3); i++) {
                if (i % 2 === 0) {
                    templeteRows = templeteRows + ' 200px 540px '
                } else {
                    templeteRows = templeteRows + ' 540px '
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

        <S.WrapperPrortfolio column_count={portfolioPostsActive.length > 2 ? 3 : portfolioPostsActive.length}
                             rows_count={rows_count}>
            <AnimatePresence>
                {portfolioPostsActive.map((post, index) => {
                        columnPosition++
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
                                    <S.PortfolioPost
                                                     grid_row_start={iterCount + 1}
                                                     grid_row_end={iterCount + 2}
                                                     key={index}
                                                     layout
                                                     initial={{opacity: 0}}
                                                     animate={{opacity: 1}}
                                                     exit={{opacity: 0}}
                                                     grid_column_start={columnPosition}>
                                        <img src={post.img} alt={post.title}/>
                                        <OverleyPost title={post.title}/>
                                    </S.PortfolioPost>
                                )
                            } else {
                                return (
                                    <S.PortfolioPost grid_row_start={iterCount}
                                                     layout
                                                     key={index}
                                                     initial={{opacity: 0}}
                                                     animate={{opacity: 1}}
                                                     exit={{opacity: 0}}
                                                     grid_row_end={iterCount + 2}
                                                     grid_column_start={columnPosition}>
                                        <img src={post.img} alt={post.title}/>
                                        <OverleyPost title={post.title}/>
                                    </S.PortfolioPost>)
                            }
                        } else {
                            if (columnPosition % 2 === 0) {
                                return (
                                    <S.PortfolioPost
                                        layout
                                        key={index}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        grid_row_start={iterCount}
                                        grid_row_end={iterCount + 2}
                                        grid_column_start={columnPosition}>
                                        <img src={post.img} alt={post.title}/>
                                        <OverleyPost title={post.title}/>
                                    </S.PortfolioPost>)
                            } else {
                                return (
                                    <S.PortfolioPost grid_row_start={iterCount}
                                                     layout
                                                     key={index}
                                                     initial={{opacity: 0}}
                                                     animate={{opacity: 1}}
                                                     exit={{opacity: 0}}
                                                     grid_row_end={iterCount + 1}
                                                     grid_column_start={columnPosition}>
                                        <img src={post.img} alt={post.title}/>
                                        <OverleyPost title={post.title}/>
                                    </S.PortfolioPost>)
                            }
                        }
                    }
                )}
            </AnimatePresence>
        </S.WrapperPrortfolio>
    )
}