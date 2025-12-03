import styled from "styled-components";

export function Menu  (){

    return(
        <nav>
            <MenuUlStyled>
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


const MenuUlStyled = styled.nav`
    display: flex;
    gap: 70px;
    
`

const MenuLiStyled = styled.li`
    list-style: none;
`

const MenuAStyled = styled.a`
    color: black;
    text-decoration: none;

`