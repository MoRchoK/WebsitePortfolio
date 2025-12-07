import {Menu,  NavStyled} from "../../../../components/menu/Menu.tsx";

export function PortfolioMenu() {

    const portfilioItems = ['All', 'Branding', 'Shirt', 'Pakage', 'Poster']

    return (
        <NavStyled marginbottom={'4rem'}>
            <Menu title={portfilioItems}/>
        </NavStyled>
    )
}

