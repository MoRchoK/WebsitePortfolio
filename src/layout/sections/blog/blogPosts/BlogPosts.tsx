import styled from "styled-components";
import FirstPostImg from '../../../../image/Rectangle77.webp'
import SecondPostImg from '../../../../image/Rectangle99.webp'
import ThirdPostImg from '../../../../image/Rectangle98.webp'
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {font} from "../../../style/common/Common.ts";


export function BlogPosts() {

    const blogPosts = [
        {
            title: "Why should we invest more in branding first?",
            url: FirstPostImg
        },
        {
            title: "Top 100 most beautiful t-shirt print design",
            url: SecondPostImg
        },
        {
            title: "Best rules to follow for achieving business goals",
            url: ThirdPostImg
        }
    ]
    return (
        <WrapperBlogPosts>
            {blogPosts.map((post, index) => (
                <WrapperBlogCard key={index}>
                    <PostImage url={post.url}/>
                    <LinkBlog>
                        {post.title}
                    </LinkBlog>
                </WrapperBlogCard>
            ))}
        </WrapperBlogPosts>
    )
}

const WrapperBlogPosts = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media ${myTheme.media.large} {
        flex-direction: column;
        gap: 50px;
    }
`


const WrapperBlogCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    height: 100%;
    @media ${myTheme.media.large} {
        width: 60%;
        justify-content: center;
        align-items: center;
    }
    @media ${myTheme.media.tablet} {
        width: 60%;
    }
    @media ${myTheme.media.mobile} {
        width: 80%;
    }
    
`

const LinkBlog = styled.a`
    ${font({weight: 600, Fmax: 22, Fmin:18, lineHeight: 1.4})}
    width: 100%;
    padding: 0 10px;
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
