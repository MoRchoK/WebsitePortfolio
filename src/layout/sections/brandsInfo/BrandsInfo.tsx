import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import sprite from "../../../../public/iconsSprites.svg"


export function BrandsInfo() {


    const brandIcon = [{
        name: 'emblem',
        viewBox: '0 0 78 78',
        xmlns: 'http://www.w3.org/2000/svg'
    },
        {
            name: 'apple',
            viewBox: '0 0 60 77',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'squirrel',
            viewBox: '0 0 74 65',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'leaf',
            viewBox: '0 0 63 72',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'pizza',
            viewBox: '0 0 63 77',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'fingerprint',
            viewBox: '0 0 72 73 ',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'cocktail',
            viewBox: '0 0 63 72',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            name: 'tooth',
            viewBox: '0 0 56 71',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            name: 'brain',
            viewBox: '0 0 87 71',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            name: 'gloves',
            viewBox: '0 0 84 71 ',
            xmlns: 'http://www.w3.org/2000/svg'
        }, {
            name: 'guitar',
            viewBox: '0 0 68 80',
            xmlns: 'http://www.w3.org/2000/svg'
        },
        {
            name: 'sberbank',
            viewBox: '0 0 69 63',
            xmlns: 'http://www.w3.org/2000/svg'
        }
    ]


    return (
        <BrandsInfoStyled>
            <TitleComponent mgbtdescriotion={'80px'} alignment={'center'} title={'Brands I’ve Worked'}
                            description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>
            <BrandsInfoStyledWrapper>
                {brandIcon.map((icon, index) => (
                    <BrandsItem maxitem={brandIcon.length} index={index} key={icon.name}
                                bgleft={Math.ceil((index + 1) % 6)}>
                        <IconBrand
                            viewBox={icon.viewBox}
                            width={'150px'}
                            height={'100px'}
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <use href={sprite + '#' + icon.name}></use>
                        </IconBrand>
                    </BrandsItem>
                ))}
            </BrandsInfoStyledWrapper>
        </BrandsInfoStyled>
    )
}


const IconBrand = styled.svg`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`


const BrandsInfoStyled = styled.section`
    height: 100vh;
    background-color: ${myTheme.colors.BgBrandsSection};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
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
    width: calc(${80 / 6}vw - 1px);
    height: calc(${50 / 2}vh);
    border-right: ${(props) => props.bgleft === 0 ? 'none' : '1px dashed' + `${myTheme.colors.borderGrandIcon}`};
    border-bottom: ${({maxitem, index}) => index >= maxitem - 6 ? 'none'
            : `1px dashed ${myTheme.colors.borderGrandIcon}`
    };

`


const BrandsInfoStyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: start;
    flex-wrap: wrap;
    width: 80vw;
    height: 50vh;

`

