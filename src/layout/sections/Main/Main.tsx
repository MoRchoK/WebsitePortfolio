import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {Header} from "../../header/Header.tsx";
import {WrapperComponentStyled} from "../../../components/wrapperComponent/WrapperComponentStyled.tsx";


export function Main() {

    return (
        <MainStyled>
            <Header/>
            <WrapperComponentStyled width={'30%'} left={"10vw"} position={'absolute'}>
                <h1>Graphic Designer</h1>
                <h2>Hello I’m<br/><span>Daniel Bryan</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem dolorum ducimus earum esse
                    exercitationem fugiat incidunt iusto libero minus molestias, mollitia nisi obcaecati officia optio
                    porro reprehenderit, rerum veniam.</p>
                <a>GET IN TOUCH</a>
            </WrapperComponentStyled>
            <ImgStyled src='/src/image/mainPhoto.webp'/>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    background-color: ${myTheme.colors.BgMainSection};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
`


const ImgStyled = styled.img`
    display: block;
    position: absolute;
    max-height: 100vh;
    transform:  scaleX(-1);
    right: 5%;
    
`


