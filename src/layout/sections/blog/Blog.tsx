import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {BlogMain} from "./blogMain/BlogMain.tsx";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import {BlogPosts} from "./blogPosts/BlogPosts.tsx";
import {BtnBusinessBlack} from "../../../components/btnBusiness/BtnBusiness.tsx";


export function Blog() {

    return (
        <BlogStyled>
            <BlogMain/>
            <TitleComponent
                mgbtdescriotion={'65px'}
                alignment={'center'}
                description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}
                title={'Blog Posts'}/>

            <BlogPosts/>
            <BtnBusinessBlack mg_bottom={'10vh'} title={'Read All Blogs'}/>
        </BlogStyled>
    )

}


const BlogStyled = styled.section`
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-color: ${myTheme.colors.whteColor};
`


