import {TabItemsType} from "../Portfolio.tsx";
import styled, {css} from "styled-components";
import {font} from "../../../style/common/Common.ts";
import {myTheme} from "../../../style/Theme/Theme.styled.tsx";

type MenuPropsType = MenuUlPropsType & {
    tabs: Array<TabItemsType>
    $activeItem?: string
    $colorActive?: string
    $setActiveItem: (item:TabItemsType) => void
}
type MenuUlPropsType = {
    gap?: string;
}


export function PortfolioTab(props: MenuPropsType) {
    return (
        <nav>
            <MenuUl gap={'50px'}>
                {props.tabs.map((item, index) => (
                    <MenuList key={index}>
                        <MenuLink onClick={() => {
                            props.$setActiveItem(item)
                        }}
                                  $colorActive={props.$colorActive} $active={item === props.$activeItem}
                                  >{item}</MenuLink>
                    </MenuList>
                ))}
            </MenuUl>
        </nav>
    )
}



export const MenuUl = styled.ul<MenuUlPropsType>`
    width: 100%;
    display: flex;
    gap: ${(props) => props.gap};
`

export const MenuList = styled.li`
    list-style: none;
`

type MenuLinkPropsType = {
    color?: string;
    $active: boolean;
    $colorActive?: string;
}

export const MenuLink = styled.button<MenuLinkPropsType>`
    ${font({Fmax: 20, Fmin: 16, weight: 500, color: myTheme.colors.descriptionCard, letterSpacing: '0.01em'})};
    &:hover {
        color: ${myTheme.colors.PraymaryText};
    }

    ${(props) => props.$active && css<MenuLinkPropsType>`
        color: ${myTheme.colors.PraymaryText};
    `}

`