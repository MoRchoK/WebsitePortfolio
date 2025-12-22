import Logo from '../../../assets/image/Ellipse.png'
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";
import {S} from "./blogMain_styled/blogMain_styled.ts";
import {Container} from "../../../container/Container.ts";
import {Fade} from "react-awesome-reveal";


export const BlogMain: React.FC = () => {
    return (
        <S.BlogMainSection id={'blog'}>
            <Container>
                <Wrapper justifycontent={'center'}>
                    <Fade>
                        <S.PostMain>
                            <S.BlogDescription>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl
                                posuere
                                aliquet
                                amet pharetra malesuada. Suspendisse nisl ac at tortor.
                            </S.BlogDescription>
                            <Wrapper gap={'15px'}>
                                <S.Avatar src={Logo} alt="Logo image"/>
                                <Wrapper flexdirection={'column'}>
                                    <S.NameUser>
                                        Emma Brown
                                    </S.NameUser>
                                    <S.StatusUser>
                                        CEO - Squirrel Sweets
                                    </S.StatusUser>
                                </Wrapper>
                            </Wrapper>
                        </S.PostMain>
                    </Fade>
                </Wrapper>
            </Container>
        </S.BlogMainSection>
    )
}
