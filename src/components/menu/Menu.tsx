import {MenuUlPropsType, S} from "../../layout/header/header_styled/Header_Styled.ts";

type MenuPropsType = MenuUlPropsType & {
    title: Array<string>
    $activeItem?: string
    $colorActive?: string
    tagName?:   'button'
    $setActiveItem?: (item: string) => void

}





export const Menu:React.FC<MenuPropsType> = (props:MenuPropsType)=>{
    return (
        <S.NavStyled>
            <S.MenuUl gap={props.gap}>
                {props.title.map((item,index) => (
                    <S.MenuList key={index}>
                        <S.MenuLink onClick={()=> props.$setActiveItem? props.$setActiveItem(item): ''} as={props.tagName} $active={item===props.$activeItem}>{item}</S.MenuLink>
                    </S.MenuList>
                ))}
            </S.MenuUl>
        </S.NavStyled>
    )
}