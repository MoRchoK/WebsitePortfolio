import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {BlogMain} from "./blogMain/BlogMain.tsx";
import {BlogPosts} from "./blogPosts/BlogPosts.tsx";
import {ButtonDark} from "../../../components/buttonDark/Button.tsx";
import {Container} from "../../../container/Container.ts";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";


export function Blog() {
    return (
        <BlogStyled>
            <Container>
                <WrapperComponent alignitems={"center"}  className={'WrapperBlog'}>
                    <BlogMain/>
                    <TitleSection
                        margin_bottom={'65px'}
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                        title={'Blog Posts'}/>
                    <BlogPosts/>
                    <ButtonDark mg_bottom={'10vh'} title={'Read All Blogs'}/>
                </WrapperComponent>
            </Container>
        </BlogStyled>
    )
}


const BlogStyled = styled.section`
    position: relative;
    padding: 300px 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${myTheme.colors.whteColor};
    button {
        margin-top: 60px;
    }
    &::before {
        content: '';
        position: absolute;
        background-image: url("/src/image/Pattern.webp");
        background-size: cover;
        width: 257px;
        height: 420px;
        top: 130px;
        left: 0;
        background-repeat: no-repeat;
        z-index: 20;
        @media screen and (max-width: 1400px) {
            width: 130px;
            height: 210px;
            top: 230px;
        }
        @media ${myTheme.media.mobile} {
            display: none;
        }
    }

    .WrapperBlogMain {
        margin-bottom: 130px;
        z-index: 3;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            background-image: url("/src/image/bgPost.webp");
            background-size: cover;
            width: 380px;
            height: 260px;
            z-index: -10;
            top: -70%;
            left: -10%;
            @media screen and (max-width: 1400px) {
                width: 190px;
                height: 130px;
                top: -30%
            }
            
        }

        @media ${myTheme.media.large} {
            max-width: 50%;
        }
        @media ${myTheme.media.tablet} {
            max-width: 60%;
        }
        @media ${myTheme.media.mobile} {
            max-width: 80%;
        }
    }

`




