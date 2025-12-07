import styled from "styled-components";



type MenuPropsType = {
    title: Array<string>

}

export function Menu  (props: MenuPropsType){
    return(
        <nav>
            <MenuUl gap={'70px'}>
                {props.title.map((item,index) => (
                    <MenuList key={index}>
                        <MenuLink href="">{item}</MenuLink>
                    </MenuList>
                ))}
            </MenuUl>
        </nav>
    )
}




type MenuUlPropsType = {
    gap?: string;
}

type NavStyledProps = {
    marginbottom?: string
}

export const NavStyled = styled.nav<NavStyledProps>`
    margin-bottom: ${(props) => props.marginbottom || '0'};

`

export const MenuUl = styled.ul<MenuUlPropsType>`
    width: 100%;
    height: 100%;
    display: flex;
    gap: ${(props) => props.gap || '0px'};
    
`


export const MenuList = styled.li`
    list-style: none;
`


type MenuLinkPropsType = {
    color?: string;
}

export const MenuLink = styled.a<MenuLinkPropsType>`
    color: ${(props) => props.color||'black'};
    text-decoration: none;
    font-family: Raleway, sans-serif;
    font-weight: 800;
    letter-spacing: 0.01em;
    
    
`