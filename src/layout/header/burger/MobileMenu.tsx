import {S} from "../header_styled/Header_Styled.ts";
import * as React from "react";


import {MenuMobileList} from "../menuHeader/MenuMobileList/menuMobile.tsx";




type BurgerPropsType = {
    $isActive: boolean
    $setIsActive: (isActive: boolean) => void
    headerMenuItems: Array<string>
}

export const MobileMenu: React.FC<BurgerPropsType> = ({$isActive, $setIsActive, headerMenuItems}:BurgerPropsType)=>{
    return (
        <S.WrapperMobileMenu>
            <S.BurgerButton $isActive={$isActive} onClick={() => $setIsActive(!$isActive)}>
                <span></span>
            </S.BurgerButton>
            {$isActive &&  <MenuMobileList $isActive={$isActive} menuItems={headerMenuItems}/>}
        </S.WrapperMobileMenu>
    )
}

