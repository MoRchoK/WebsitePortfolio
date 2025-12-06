import {WrapperComponentStyled} from "../../../../components/wrapperComponent/WrapperComponentStyled.tsx";
import styled from "styled-components";
import {myTheme} from "../../../../components/Theme/Theme.styled.tsx";
import Logo from  '../../../../image/Ellipse.png'


export function BlogMain() {
    return (
        <WrapperComponentStyled alignitems={"start"} width={"35%"} marginbottom={'160px'}>
            <BlogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet
                amet pharetra malesuada. Suspendisse nisl ac at tortor.
            </BlogDescription>
            <WrapperComponentStyled flexdirection={'row'} gap={'1em'}>
                <Avatar src={Logo} alt="No found"/>
                <WrapperComponentStyled >
                    <NameUser>
                        Emma Brown
                    </NameUser>
                    <StatusUser>
                        CEO - Squirrel Sweets
                    </StatusUser>
                </WrapperComponentStyled>
            </WrapperComponentStyled>
        </WrapperComponentStyled>
    )

}


const NameUser = styled.span`
    font-size: 20px;
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
    margin-bottom: 2rem;
    font-size: 28px;
    color: ${myTheme.colors.descriptionPostText};


`