import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {BlogBgImg, BlogMain} from "./blogMain/BlogMain.tsx";
import {BlogPosts} from "./blogPosts/BlogPosts.tsx";
import {ButtonDark} from "../../../components/buttonDark/Button.tsx";
import {Container} from "../../../container/Container.ts";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";


export function Blog() {
    return (
        <BlogStyled>
            <Container>
                <WrapperComponent alignitems={"center"} >
                    <BlogMain/>
                    <TitleSection
                        margin_bottom={'65px'}
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                        title={'Blog Posts'}/>
                    <BlogPosts/>
                    <ButtonDark mg_bottom={'10vh'} title={'Read All Blogs'}/>
                </WrapperComponent>
            </Container>
            <BlogBgImg left={'0'} top={'10%'} src={'/src/image/Pattern.webp'} alt="Post image"/>
        </BlogStyled>
    )
}



const BlogStyled = styled.section`
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${myTheme.colors.whteColor};
`




