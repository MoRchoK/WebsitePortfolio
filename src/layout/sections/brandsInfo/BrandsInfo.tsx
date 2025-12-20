import {S} from "./brands_styled/Brands_Styled.ts";
import {TitleSection} from "../../../components/titleSection/TitleSection.tsx";
import {SvgIcon} from "../../../components/svgIcon/SvgIcon.tsx";
import * as React from "react";

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


export const BrandsInfo: React.FC = () => {
    return (
        <S.BrandsSection>
            <TitleSection
                width={'500px'}
                title={'Brands I’ve Worked'}
                description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>
            <S.WrapperBrands>
                {brandIcon.map((icon) => (
                    <S.BrandsItem alignitems={'center'} justifycontent={'center'} key={icon.id}>
                        <SvgIcon
                            id={icon.id}
                            width={'85px'}
                            height={'85px'}
                            viewBox={icon.viewBox}
                        />
                    </S.BrandsItem>
                ))}
            </S.WrapperBrands>
        </S.BrandsSection>
    )
}





