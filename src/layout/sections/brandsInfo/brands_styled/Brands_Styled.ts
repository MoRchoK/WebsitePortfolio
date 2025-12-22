import {myTheme} from "../../../style/Theme/Theme.styled.tsx";
import {Wrapper} from "../../../../components/wrapperComponent/Wrapper.tsx";
import styled from "styled-components";




const WrapperBrands = styled.div`
    display: grid;
    max-width: 1500px;
    width: 100%;
    grid-template-columns: repeat(6, 1fr);

    & > :nth-child(n) {
        border-right: 1px dashed ${myTheme.colors.borderGrandIcon};
        border-bottom: 1px dashed ${myTheme.colors.borderGrandIcon};
    }

    & > :nth-child(6n) {
        border-right: none;
    }

    & > :nth-last-child(-n+6) {
        border-bottom: none;
    }

    @media ${myTheme.media.extra_large} {
        grid-template-columns: repeat(4, 1fr);
        & > :nth-child(n) {
            border-right: 1px dashed ${myTheme.colors.borderGrandIcon};
            border-bottom: 1px dashed ${myTheme.colors.borderGrandIcon};
        }

        & > :nth-child(4n) {
            border-right: none;
        }

        & > :nth-last-child(-n + 4) {
            border-bottom: none;
        }
    }
    
    @media ${myTheme.media.large} {
        grid-template-columns: repeat(3, 1fr);
        & > :nth-child(n) {
            border-right: 1px dashed ${myTheme.colors.borderGrandIcon};
            border-bottom: 1px dashed ${myTheme.colors.borderGrandIcon};
        }
        & > :nth-child(3n) {
            border-right: none;
        }
        & > :nth-last-child(-n + 3) {
            border-bottom: none;
        }
    }
    
    @media ${myTheme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        & > :nth-child(n) {
            border-right: 1px dashed ${myTheme.colors.borderGrandIcon};
            border-bottom: 1px dashed ${myTheme.colors.borderGrandIcon};
        }
        & > :nth-child(2n) {
            border-right: none;
        }
        & > :nth-last-child(-n + 2) {
            border-bottom: none;
        }
    }
`


const BrandsSection = styled.section`
    background-color: ${myTheme.colors.BgBrandsSection};
    flex-direction: column;
    position: relative;
    z-index: 1;
    padding: 145px 15px;
    gap: 80px;
    
`


const BrandsItem = styled(Wrapper)`
    
    width: 100%;
    min-height: 210px;
    @media ${myTheme.media.mobile} {
        &>svg{
            width: 70px;
            height: 70px;
        }
    }
    
`

export const S = {
    BrandsSection,
    WrapperBrands,
    BrandsItem,
}

