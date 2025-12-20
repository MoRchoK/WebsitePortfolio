import {Menu} from "../../../../components/menu/Menu.tsx";
import {S} from '../../header_styled/Header_Styled.ts'



type MenuDesktopPropsType = {
    menuItems: Array<string>
}

export const MenuDesktop:React.FC<MenuDesktopPropsType> = (props:MenuDesktopPropsType) => {
    return (
        <S.MenuDesktop>
            <Menu gap={'40px'} title={props.menuItems}/>
        </S.MenuDesktop>
    )
}
