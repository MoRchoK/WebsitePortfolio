import {S} from "../header_styled/Header_Styled.ts";
import {MenuMobileList} from "../menuHeader/MenuMobileList/menuMobile.tsx";
import {useState} from "react";
import {headerMenuItemsType} from "../Header.tsx";


type MobileMenuPropsType = {
    menuItems: Array<headerMenuItemsType>
}


export const MobileMenu: React.FC<MobileMenuPropsType> = ({menuItems}: MobileMenuPropsType)=>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <S.WrapperMobileMenu>
            <S.BurgerButton $isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </S.BurgerButton>
            {isOpen &&  <MenuMobileList setIsOpen={setIsOpen} $isActive={isOpen} menuItems={menuItems}/>}
        </S.WrapperMobileMenu>
    )
}

