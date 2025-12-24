import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import {font} from "../../../style/common/Common.ts";


const BlogPostsSection = styled.section`
    padding: 100px 0 150px;
    background-color: ${myTheme.colors.whteColor};
    position: relative;
    z-index: 1;
    button {
        margin-top: 60px;
    }
    
`

//BlogCard
const BlogCard = styled(Wrapper)`
    width: 100%;
    margin-top: 65px;
    @media ${myTheme.media.large} {
        flex-direction: column;
        gap: 50px;
    }
`
const WrapperBlogCard = styled.div`
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media ${myTheme.media.large} {
        width: 80%;
    }
    
`
const LinkBlog = styled.a`
    display: inline-block;
    ${font({weight: 600, Fmax: 22, Fmin: 18, lineHeight: 1.4})}
    width: 100%;
    padding-left: 10px;
`


type PostImagePropsType = {
    url: string
}
const PostImage = styled.div<PostImagePropsType>`
    background-image: ${(props) => props.url && `url(${props.url})`};
    background-size: cover;
    background-position: center;
    min-height: 280px;
    max-height: 395px;
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 5%;
`



export const S = {
    BlogPostsSection,
    BlogCard,
    WrapperBlogCard,
    LinkBlog,
    PostImage

}