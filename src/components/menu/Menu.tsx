import styled from "styled-components";
import {myTheme} from "../../layout/style/Theme/Theme.styled.tsx";


type MenuPropsType = MenuUlPropsType & {
    title: Array<string>
    className?: string
}
type MenuUlPropsType = {
    gap?: string;
}

export function Menu  (props: MenuPropsType){
    return(
        <NavStyled>
            <MenuUl gap={props.gap}>
                {props.title.map((item,index) => (
                    <MenuList key={index}>
                        <MenuLink href="">{item}</MenuLink>
                    </MenuList>
                ))}
            </MenuUl>
        </NavStyled>
    )
}


export const NavStyled = styled.nav`
`

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
}

export const MenuLink = styled.a<MenuLinkPropsType>`
    letter-spacing: 0.01em;
    color: ${myTheme.colors.PraymaryText};
`