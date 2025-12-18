import Logo from '../../../assets/image/Ellipse.png'
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import styled from "styled-components";
import {font} from "../../style/common/Common.ts";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Container} from "../../../container/Container.ts";


export function BlogMain() {
    return (
        <BlogMainStyled>
            <Container>
                <Wrapper justifycontent={'center'}>
                    <PostMain>
                            <BlogDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl
                                posuere
                                aliquet
                                amet pharetra malesuada. Suspendisse nisl ac at tortor.
                            </BlogDescription>
                            <Wrapper gap={'15px'}>
                                <Avatar src={Logo} alt="Logo image"/>
                                <Wrapper flexdirection={'column'}>
                                    <NameUser>
                                        Emma Brown
                                    </NameUser>
                                    <StatusUser>
                                        CEO - Squirrel Sweets
                                    </StatusUser>
                                </Wrapper>
                            </Wrapper>
                    </PostMain>
                </Wrapper>
            </Container>
        </BlogMainStyled>
    )
}

const BlogMainStyled = styled.section`
    padding: 300px 0 60px;
    background-color: ${myTheme.colors.whteColor};
    position: relative;
    &::before {
        content: '';
        position: absolute;
        background-image: url("/src/assets/image/Pattern.webp");
        background-size: cover;
        width: 257px;
        height: 420px;
        top: 130px;
        left: 0;
        background-repeat: no-repeat;
        z-index: 20;
        @media screen and (max-width: 1400px) {
            width: 185px;
            height: 300px;
            top: 200px;
            left: 0;
        }
        @media ${myTheme.media.extra_large} {
            display: none;
        }
    }
`

const PostMain = styled.div`
    position: relative;
    max-width: 740px;
    width: 100%;
    z-index: 1;
    transform: translateX(55px);

    &::before {
        content: '';
        position: absolute;
        background-image: url("/src/assets/image/bgPost.webp");
        background-size: cover;
        width: 380px;
        height: 260px;
        z-index: -1;
        top: -70%;
        left: -10%;
        @media screen and (max-width: 1400px) {
            width: 190px;
            height: 130px;
            top: -35%
        }
    }
    
    @media ${myTheme.media.large} {
        max-width: 70%;
    }
   
    @media ${myTheme.media.mobile} {
        max-width: 80%;
    }
`

const NameUser = styled.span`
    ${font({Fmax: 20, Fmin: 18})}
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.4rem;

`
const StatusUser = styled.span`
    font-size: 14px;

`


const Avatar = styled.img`
    width: 55px;
    height: 55px

`

const BlogDescription = styled.p`
    ${font({
        weight: 500,
        lineHeight: 1.7,
        Fmax: 28,
        Fmin: 18,
        color: myTheme.colors.descriptionPostText,
        family: 'Lato, sans-serif',
        letterSpacing: '0.02em',
    })};
    font-style: italic;
    margin-bottom: 35px;
    z-index: 100;
    `