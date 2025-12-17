import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {BlogCard} from "./blogCard/BlogCard.tsx";
import {BtnDark} from "../../../components/buttonDark/ButtonDark.tsx";
import {Container} from "../../../container/Container.ts";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";


export function BlogPosts() {
    return (
        <BlogPostsStyled>
            <Container>
                <Wrapper flexdirection={'column'} justifycontent={'center'}  alignitems={"center"} >
                    <TitleSection
                        width={'445px'}
                        title={'Blog Posts'}
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                        />
                    <BlogCard/>
                    <BtnDark mg_bottom={'10vh'}>Read All Blogs</BtnDark>
                </Wrapper>
            </Container>
        </BlogPostsStyled>
    )
}


const BlogPostsStyled = styled.section`
    padding: 60px 0 150px;
    background-color: ${myTheme.colors.whteColor};
    button {
        margin-top: 60px;
    }
`




