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
        <WrapperComponentStyled flexwrap={'wrap'} width={'100%'} marginbottom={'60px'} gap={'20px'} flexdirection={'row'} justifycontent={'center'} alignitems={'center'}>
            {Object.values(BlogPosts).map((post, index) => (
                <WrapperComponentStyled flexdirection={'column'} width={'385px'} key={index}>
                    <PostImage url={post.url}/>
                    <PostTitle>
                        {post.title}
                    </PostTitle>
                </WrapperComponentStyled>
            ))}
        </WrapperComponentStyled>
    )
}

const PostTitle = styled.h3`
    display: inline-block;
    font-size: 22px;
    color: ${myTheme.colors.PraymaryText};
    font-weight: 600;
    line-height: 142%;
    width: 100%;
`

type PostImagePropsType = {
    url: string
}
const PostImage = styled.div<PostImagePropsType>`
    background-image: ${(props) => props.url && `url(${props.url})`};
    background-size: cover;
    background-position: center;
    height: 280px;
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 5%;
`
