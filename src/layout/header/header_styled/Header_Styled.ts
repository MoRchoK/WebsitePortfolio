import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import styled, {css} from "styled-components";
import {font} from "../../style/common/Common.ts";


//Header

const Header = styled.header`
    display: flex;
    justify-content: center;
    height: 130px;
    min-width: 360px;
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


//Menu
const NavStyled = styled.nav`
`
export type MenuUlPropsType = {
    gap?: string;
}
const MenuUl = styled.ul<MenuUlPropsType>`
    width: 100%;
    display: flex;
    gap: ${(props) => props.gap};
`
const MenuList = styled.li`
    list-style: none;
   
`
type MenuLinkPropsType = {
    color?: string;
    $active: boolean;
    $colorActive?: string;
    tagName?: 'button';
}
const MenuLink = styled.a<MenuLinkPropsType>`
    cursor: pointer;
    ${font({Fmax: 20, Fmin: 16, weight: 500, color: myTheme.colors.descriptionCard, letterSpacing: '0.01em'})};
    &:hover {
        color: ${myTheme.colors.PraymaryText};
    }
    ${(props) => props.$active && css<MenuLinkPropsType>`
        color: ${myTheme.colors.PraymaryText};
    `}

`


//Menu Desktop
const MenuDesktop = styled.div`
    a {
        color: ${myTheme.colors.PraymaryText};
        font-size: 16px;
        &:hover {
            color: ${myTheme.colors.highlighting};
        }
    }
    @media ${myTheme.media.tablet} {
        display: none;
    }
`


//Mobile Menu

const WrapperMobileMenu = styled.div`
    display: flex;
    align-items: center;
`

const MenuMobile = styled.div<BurgerButtonProps>`
    display: flex;
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
    
`
type BurgerButtonProps = {
    $isActive: boolean;
}


//Burger
const BurgerButton = styled.button<BurgerButtonProps>`
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





export const S = {
    Header,
    MenuDesktop,
    MenuMobile,
    NavStyled,
    MenuUl,
    MenuList,
    MenuLink,
    BurgerButton,
    WrapperMobileMenu,
}