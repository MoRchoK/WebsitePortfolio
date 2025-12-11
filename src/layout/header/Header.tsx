import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import styled from "styled-components";
import {myTheme} from "../../components/Theme/Theme.styled.tsx";
import {Container} from "../../container/Container.ts";
import {WrapperComponent} from "../../components/wrapperComponent/WrapperComponent.tsx";

export function Header() {
    const headerItems = ['Home', 'About', 'Services', 'Store', 'Blog', 'Contact']
    return (
        <HeaderStyled>
            <Container>
                <WrapperComponent width={'100%'} flexdirection={'row'} justifycontent={'space-between'} alignitems={'center'}>
                <Logo/>
                <Menu gap={'40px'} title={headerItems}/>
                </WrapperComponent>
            </Container>

        </HeaderStyled>

    )
}


const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    height: 130px;
    width: 100%;
    align-items: center;
    background-color: ${myTheme.colors.BgHeader};
    position: absolute;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    top: 0;
    z-index: 100;
    a:hover{
        color: ${myTheme.colors.highlighting};
    }
   
    

`

