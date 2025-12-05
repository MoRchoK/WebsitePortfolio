import styled from "styled-components";
import {myTheme} from "../../../components/Theme/Theme.styled.tsx";
import {TitleComponent} from "../../../components/TitleComponent/TitleComponent.tsx";
import sprite from "../../../../public/iconsSprites.svg"


export function BrandsInfo() {
    const brandIcon = [
        'emblem', 'apple', 'leaf', 'squirrel', 'pizza', 'fingerprint', 'cocktail', 'tooth', 'brain', 'gloves', 'guitar', 'sberbank'
    ]



    return (
        <BrandsInfoStyled>
            <TitleComponent mgbtdescriotion={'80px'} alignment={'center'} title={'Brands I’ve Worked'}
                            description={'Things that I can do for my clients. Just make your good trust I love to provide quality works.'}/>

            <BrandsInfoStyledWrapper>
                {brandIcon.map((iconId, index) => (
               <BrandsItem maxitem={brandIcon.length} index={index} key={iconId} bgleft={Math.ceil((index+1)%6)}>
                        <IconBrand
                            display={'flex'}
                            viewBox="0 0 84 84"
                            width={'150px'}
                            height={'150px'}
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <use href={sprite + '#' + iconId}></use>
                        </IconBrand>
                    </BrandsItem>
                ))}
            </BrandsInfoStyledWrapper>
        </BrandsInfoStyled>
    )
}


const IconBrand  = styled.svg`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
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
    index:number

}

const BrandsItem = styled.div<BrandsItemPropsType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(${80 / 6}vw - 1px);
    height: calc(${50 / 2}vh);
    border-right: ${(props)=>props.bgleft === 0 ? 'none': '1px dashed' + `${myTheme.colors.borderGrandIcon}`};
    border-bottom: ${({ maxitem,index }) =>index>=maxitem-6? 'none'
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

