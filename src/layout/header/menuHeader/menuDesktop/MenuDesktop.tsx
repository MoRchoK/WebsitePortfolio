import {S} from '../../header_styled/Header_Styled.ts'
import {HeaderMenu} from "../../headerMenu/HeaderMenu.tsx";
import {headerMenuItemsType} from "../../Header.tsx";



 type MenuDesktopPropsType = {
    menuItems: Array<headerMenuItemsType>
}

export const MenuDesktop:React.FC<MenuDesktopPropsType> = (props:MenuDesktopPropsType) => {
    return (
        <S.MenuDesktop >
            <HeaderMenu headerItems={props.menuItems}/>
        </S.MenuDesktop>
    )
}
