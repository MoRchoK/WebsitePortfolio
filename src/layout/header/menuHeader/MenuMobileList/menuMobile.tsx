import {S} from "../../header_styled/Header_Styled.ts";
import {headerMenuItemsType} from "../../Header.tsx";
import {Link} from "react-scroll";




type MenuMobilePropsType = {
    $isActive: boolean;
    menuItems: Array<headerMenuItemsType>
    setIsOpen: (isOpen: boolean) => void;
}



export const MenuMobileList: React.FC<MenuMobilePropsType> = ({$isActive,  setIsOpen, menuItems}: MenuMobilePropsType) => {
    return (
        <S.MenuMobile $isActive={$isActive} onClick={()=>{
            setIsOpen(false);
        }}>
            <S.NavStyled>
                <S.MenuUl >
                    {menuItems.map((item) => (
                        <S.MenuList key={item.id}>
                            <Link activeClass="active"
                                  to={item.id}
                                  spy={true}
                                  smooth={true}
                                  duration={1000}
                                  delay={10}
                                  spyThrottle={500}
                                  onClick={()=>{
                                      setTimeout(()=>{
                                          setIsOpen(false);
                                      }, 0)
                                  }}
                            >
                                {item.title}
                            </Link>
                        </S.MenuList>
                    ))}
                </S.MenuUl>
            </S.NavStyled>
        </S.MenuMobile>
    )
}

