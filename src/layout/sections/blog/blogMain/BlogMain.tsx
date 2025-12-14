import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import styled from "styled-components";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import Logo from '../../../../image/Ellipse.png'
import {font} from "../../../style/common/Common.ts";


export function BlogMain() {
    return (
        <WrapperBlogMain >
            <BlogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet
                amet pharetra malesuada. Suspendisse nisl ac at tortor.
            </BlogDescription>
            <WrapperComponent flexdirection={'row'} gap={'1em'}>
                <Avatar src={Logo} alt="Logo image"/>
                <WrapperComponent>
                    <NameUser>
                        Emma Brown
                    </NameUser>
                    <StatusUser>
                        CEO - Squirrel Sweets
                    </StatusUser>
                </WrapperComponent>
            </WrapperComponent>
            {/*<BlogBgImg opacity={0.7} left={'-15%'} top={'-80%'} src={'/src/image/bgPost.webp'} alt="background image"/>*/}
        </WrapperBlogMain>
    )
}



const WrapperBlogMain = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 740px;
    width: 100%;
    margin-bottom: 130px;
    align-items: start;
    
    @media ${myTheme.media.large}{
        max-width: 50%;
    }
    @media ${myTheme.media.tablet}{
        max-width: 60%;
    }
    @media ${myTheme.media.mobile}{
        max-width: 80%;
    }
`

type BlogBgImgPropsType = {
    left?: string;
    top?: string;
    opacity?: number;
}

export const BlogBgImg = styled.img<BlogBgImgPropsType>`
    position: absolute;
    z-index: -1;
    left: ${(props) => props.left || '0'};
    top: ${(props) => props.top || '0'};
    opacity: ${(props) => props.opacity || 1};
`


const NameUser = styled.span`
    ${font({Fmax: 20, Fmin:18})}
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
    ${font({weight: 500, lineHeight: 1.7, Fmax: 28, Fmin: 18, color: myTheme.colors.descriptionPostText, family: 'Lato, sans-serif'})}
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    
`