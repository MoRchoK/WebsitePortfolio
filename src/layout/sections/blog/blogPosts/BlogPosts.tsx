import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import styled from "styled-components";
import FirstPostImg from '../../../../image/Rectangle77.webp'
import SecondPostImg from '../../../../image/Rectangle99.webp'
import ThirdPostImg from '../../../../image/Rectangle98.webp'
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";


export function BlogPosts() {
    const BlogPosts = {
        FirstPost: {
            title: "Why should we invest more in branding first?",
            url: FirstPostImg
        },
        SecondPost: {
            title: "Top 100 most beautiful t-shirt print design",
            url: SecondPostImg
        },
        ThirdPost: {
            title: "Best rules to follow for achieving business goals",
            url: ThirdPostImg
        }
    }


    return (
        <WrapperComponentStyled flexwrap={'wrap'} marginbottom={'' +
            '110px'} gap={'50px'} flexdirection={'row'} justifycontent={'center'} alignitems={'center'}>
            {Object.values(BlogPosts).map((post, index) => (
                <BlogPostsStyled key={index}>
                    <PostImage url={post.url}/>
                    <PostTitle>
                        {post.title}
                    </PostTitle>
                </BlogPostsStyled>
            ))}
        </WrapperComponentStyled>
    )
}

const PostTitle = styled.h3`
    font-size: 22px;
    color: ${myTheme.colors.PraymaryText};
    font-weight: 600;
    line-height: 142%;
`

type PostImagePropsType = {
    url: string
}
const PostImage = styled.div<PostImagePropsType>`
    background-image: ${(props) => props.url && `url(${props.url})`};
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 10%;
`;

const BlogPostsStyled = styled.div`
    height: 14.5vw;
    width: 19.7vw;

`