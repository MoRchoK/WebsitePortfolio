import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {BlogBgImg, BlogMain} from "./blogMain/BlogMain.tsx";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {BlogPosts} from "./blogPosts/BlogPosts.tsx";
import {ButtonDark} from "../../../components/buttonDark/Button.tsx";
import {Container} from "../../../container/Container.ts";


export function Blog() {
    return (
        <BlogStyled>
            <Container>
                <BlogMain/>
                <TitleComponent
                    mgbtdescriotion={'65px'}
                    alignment={'center'}
                    description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                    title={'Blog Posts'}/>
                <BlogPosts/>
                <ButtonDark mg_bottom={'10vh'} title={'Read All Blogs'}/>
            </Container>
            <BlogBgImg left={'0'} top={'10%'} src={'/src/image/Pattern.webp'} alt="No found"/>
        </BlogStyled>
    )

}


const BlogStyled = styled.section`
    position: relative;
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-color: ${myTheme.colors.whteColor};
    z-index: 1;
    

    ${Container} {
        flex-direction: column;

        
    }


`


