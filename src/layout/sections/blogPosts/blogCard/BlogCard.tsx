import FirstPostImg from '../../../../assets/image/Rectangle77.webp'
import SecondPostImg from '../../../../assets/image/Rectangle99.webp'
import ThirdPostImg from '../../../../assets/image/Rectangle98.webp'
import {S} from "../blogPosts_styled/blogPosts_styled.ts";


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

export function BlogCard() {
    return (
        <S.BlogCard alignitems={'center'} justifycontent={'center'} gap={'20px'}>
                {blogPosts.map((post, index) => (
                    <S.WrapperBlogCard flexdirection={'column'} key={index}>
                        <S.PostImage url={post.url}/>
                        <S.LinkBlog>
                            {post.title}
                        </S.LinkBlog>
                    </S.WrapperBlogCard>
                ))}
        </S.BlogCard>
    )
}







