import {S} from "../header_styled/Header_Styled.ts";
import {Link} from "react-scroll";
import {headerMenuItemsType} from "../Header.tsx";
import {useEffect, useState} from "react";



type HeaderMenuPropsType = {
    headerItems: Array<headerMenuItemsType>,
}



export const HeaderMenu:React.FC<HeaderMenuPropsType> = (props:HeaderMenuPropsType)=>{
    const [isActive, setActive] = useState(false);
    function isScrollAtBottom() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if(scrollTop + clientHeight >= (scrollHeight - 30)){
            setActive(true);
        }else {
            setActive(false);
        }
        return ;
    }
    useEffect(()=>{
        window.addEventListener('scroll', isScrollAtBottom )

        return () => {
            window.removeEventListener('scroll', isScrollAtBottom);
        }
    })

    return (
        <S.NavStyled>
            <S.MenuUl gap={'50px'}>
                {props.headerItems.map((item) => (
                    <S.MenuList key={item.id}>
                        <Link activeClass="active"
                              className={(item.id ==='contact' && isActive)? "active": '' }
                              to={item.id}
                              spy={true}
                              smooth={true}
                              duration={1000}
                              delay={200}
                              spyThrottle={500}
                        >
                            {item.title}
                        </Link>

                    </S.MenuList>
                ))}
            </S.MenuUl>
        </S.NavStyled>
    )
}