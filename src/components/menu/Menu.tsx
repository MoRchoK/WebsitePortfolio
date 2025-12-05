import styled from "styled-components";

export function Menu  (){
    return(
        <nav>
            <MenuUlStyled gap={'70px'}>
                <MenuLiStyled>
                    <MenuAStyled href="">Home</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled href="">About</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled href="">Services</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled href="">Store</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled href="">Blog</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled href="">Contact</MenuAStyled>
                </MenuLiStyled>
            </MenuUlStyled>
        </nav>
    )
}




type MenuUlStyledPropsType = {
    gap?: string;
}

type NavStyledProps = {
    marginbottom?: string
}

export const NavStyled = styled.nav<NavStyledProps>`
    margin-bottom: ${(props) => props.marginbottom || '0'};

`

export const MenuUlStyled = styled.ul<MenuUlStyledPropsType>`
    width: 100%;
    height: 100%;
    display: flex;
    gap: ${(props) => props.gap || '0px'};
    
`

export const MenuLiStyled = styled.li`
    list-style: none;
`


type MenuAStyledPropstype = {
    color?: string;
}

export const MenuAStyled = styled.a<MenuAStyledPropstype>`
    color: ${(props) => props.color||'black'};
    text-decoration: none;

`