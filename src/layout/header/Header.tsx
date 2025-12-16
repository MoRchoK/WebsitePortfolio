import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import styled, {css} from "styled-components";
import {myTheme} from "../style/Theme/Theme.styled.tsx";
import {Container} from "../../container/Container.ts";
import {WrapperComponent} from "../../components/wrapperComponent/WrapperComponent.tsx";
import {useState} from "react";
import {font} from "../style/common/Common.ts";

export function Header() {
    const [isActive, setIsActive] = useState(false)
    const headerItems = ['Home', 'About', 'Services', 'Store', 'Blog', 'Contact']
    return (
        <HeaderStyled>
            <Container>
                <WrapperComponent justifycontent={'space-between'} alignitems={'center'}>
                    <Logo/>
                    <MenuDesktop>
                        <Menu gap={'40px'} title={headerItems}/>
                    </MenuDesktop>
                    <BurgerButton $isActive={isActive} onClick={() => setIsActive(!isActive)}>
                        <span></span>
                    </BurgerButton>
                </WrapperComponent>
                <MenuMobile $isActive={isActive}>
                    <Menu gap={'20px'} title={headerItems}/>
                </MenuMobile>
            </Container>
        </HeaderStyled>
    )
}

const MenuDesktop = styled.div`
    a {
        font-size: 16px;
        &:hover {
            color: ${myTheme.colors.highlighting};
        }
    }
    @media ${myTheme.media.tablet} {
        display: none;
    }
`
const MenuMobile = styled.div<BurgerButtonProps>`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${myTheme.colors.secondarySection};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
            ${font({weight: 400, Fmax: 42, Fmin: 42})}
        }
    }
    ${props => props.$isActive && css<BurgerButtonProps>`
        display: flex;
    `}
`
type BurgerButtonProps = {
    $isActive: boolean;
}

export const BurgerButton = styled.button<BurgerButtonProps>`
    position: fixed;
    width: 50px;
    height: 50px;
    right: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    span {
        position: absolute;
        width: 36px;
        height: 3px;
        background-color: ${myTheme.colors.PraymaryText};
        transition: .2s;
        &::after {
            content: '';
            position: absolute;
            display: block;
            height: 3px;
            width: 20px;
            background-color: ${myTheme.colors.PraymaryText};
            transform: translate(16px, 10px)
        }
        &::before {
            content: '';
            position: absolute;
            display: block;
            height: 3px;
            width: 36px;
            background-color: ${myTheme.colors.PraymaryText};
            transform: translateY(-10px)
        }
    }

    ${(props) => props.$isActive && css<BurgerButtonProps>`
        span {
            transform: rotate(45deg);
            &::before {
                transform: translateY(0) rotate(-90deg);
            }
            &::after {
                display: none;
            }
        }
    `} @media ${myTheme.media.tablet} {
    display: flex;
}
`

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    height: 130px;
    min-width: 360px;
    align-items: center;
    background-color: ${myTheme.colors.BgHeader};
    position: absolute;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    @media ${myTheme.media.tablet} {
        height: 10%;
    }




`

