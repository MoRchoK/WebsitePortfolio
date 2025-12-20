import {Menu} from "../../../../components/menu/Menu.tsx";
import {S} from "../../header_styled/Header_Styled.ts";



type MenuMobilePropsType = {
    $isActive: boolean;
    menuItems: Array<string>

}


export const MenuMobileList: React.FC<MenuMobilePropsType> = ({$isActive, menuItems}: MenuMobilePropsType) => {
    return (
        <S.MenuMobile $isActive={$isActive}>
            <Menu gap={'20px'} title={menuItems}/>
        </S.MenuMobile>
    )
}

