import {MenuAStyled, MenuLiStyled, MenuUlStyled, NavStyled} from "../../../../components/menu/Menu.tsx";

export function PortfolioMenu() {
    return (
        <NavStyled marginBottom={'4rem'}>
            <MenuUlStyled gap={'70px'}>
                <MenuLiStyled>
                    <MenuAStyled>All</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled>Branding</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled>T-Shirt</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled>Pakage</MenuAStyled>
                </MenuLiStyled>
                <MenuLiStyled>
                    <MenuAStyled>Poster</MenuAStyled>
                </MenuLiStyled>
            </MenuUlStyled>
        </NavStyled>
    )
}

