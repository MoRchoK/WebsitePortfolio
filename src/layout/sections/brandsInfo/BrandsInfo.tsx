import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";


export function BrandsInfo() {


    const brandIcon = [{
        id: 'emblem',
        viewBox: '0 0 78 78',
        xmlns: 'http://www.w3.org/2000/svg'
    },
        {
            id: 'apple',
            viewBox: '0 0 60 77',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'squirrel',
            viewBox: '0 0 74 65',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'leaf',
            viewBox: '0 0 63 72',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'pizza',
            viewBox: '0 0 63 77',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'fingerprint',
            viewBox: '0 0 72 73 ',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'cocktail',
            viewBox: '0 0 63 72',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            id: 'tooth',
            viewBox: '0 0 56 71',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            id: 'brain',
            viewBox: '0 0 87 71',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            id: 'gloves',
            viewBox: '0 0 84 71 ',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            id: 'guitar',
            viewBox: '0 0 68 80',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            id: 'sberbank',
            viewBox: '0 0 69 63',
            xmlns: 'http://www.w3.org/2000/svg'
        }
    ]


    return (
        <BrandsInfoStyled>
            <TitleSection title={'Brands I’ve Worked'}
                            description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>
            <WrapperComponent flexdirection={'row'} flexwrap={'wrap'} alignitems={'center'} justifycontent={'center'} width={'1500px'}>
                {brandIcon.map((icon, index) => (
                    <BrandsItem maxitem={brandIcon.length} index={index} key={icon.id}
                                bgleft={Math.ceil((index + 1) % 6)}>
                        <SvgIcon
                            id={icon.id}
                            width={'85px'}
                            height={'85px'}
                            viewBox={icon.viewBox}
                        />

                    </BrandsItem>
                ))}
            </WrapperComponent>
        </BrandsInfoStyled>
    )
}


const BrandsInfoStyled = styled.section`
    height: 100%;
    width: 100%;
    background-color: ${myTheme.colors.BgBrandsSection};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 130px 0;
    gap: 70px;
    
   
`


type BrandsItemPropsType = {
    bgleft: number
    maxitem: number
    index: number

}

const BrandsItem = styled.div<BrandsItemPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    border-right: ${(props) => props.bgleft === 0 ? 'none' : '1px dashed' + `${myTheme.colors.borderGrandIcon}`};
    border-bottom: ${({maxitem, index}) => index >= maxitem - 6 ? 'none'
            : `1px dashed ${myTheme.colors.borderGrandIcon}`
    };

`



