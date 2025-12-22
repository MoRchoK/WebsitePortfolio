import {S} from "./blogPosts_styled/blogPosts_styled.ts";
import {BlogCard} from "./blogCard/BlogCard.tsx";
import {BtnDark} from "../../../components/buttonDark/ButtonDark.tsx";
import {Container} from "../../../container/Container.ts";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";



export const BlogPosts: React.FC = ()=> {
    return (
        <S.BlogPostsSection>
            <Container>
                <Wrapper flexdirection={'column'} justifycontent={'center'}  alignitems={"center"} >
                    <TitleSection
                        width={'445px'}
                        title={'Blog Posts'}
                        description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                        />
                    <BlogCard/>
                    <BtnDark>Read All Blogs</BtnDark>
                </Wrapper>
            </Container>
        </S.BlogPostsSection>
    )
}






