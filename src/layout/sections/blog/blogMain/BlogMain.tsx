import {WrapperComponent} from "../../../../components/wrapperComponent/WrapperComponent.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
import Logo from '../../../../image/Ellipse.png'


export function BlogMain() {
    return (
        <WrapperComponent alignitems={"start"} width={"740px"} margin_bottom={'130px'} >
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
        </WrapperComponent>
    )
}

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
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.4rem;
    font-weight: 700;
    line-height: 100%;

`
const StatusUser = styled.span`
    font-size: 14px;

`


const Avatar = styled.img`
    width: 55px;
    height: 55px

`

const BlogDescription = styled.p`
    margin-bottom: 2rem;
    font-size: 28px;
    color: ${myTheme.colors.descriptionPostText};
    font-family: Lato, sans-serif;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: -0.02em;
`