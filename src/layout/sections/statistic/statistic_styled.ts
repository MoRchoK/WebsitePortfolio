import {font} from "../../style/common/Common.ts";
import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Wrapper} from "../../../components/wrapperComponent/Wrapper.tsx";



const StatisticSection = styled.section`
    padding: 130px 0;
    background-color: ${myTheme.colors.BgBrandsSection};
    position: relative;
    z-index: 1;
    }
`


const StatCard = styled(Wrapper)`
    @media ${myTheme.media.large} {
        min-width: 300px;
        width: 100%;
    }
`

const StatisticItems = styled(Wrapper)`
    @media ${myTheme.media.large} {
        justify-content: center;
        flex-wrap: wrap;
    }
}
`

const StatValue = styled.span`
    ${font({Fmax: 105, Fmin:90, color: myTheme.colors.statValueText, letterSpacing: '-0.04em'})}
    margin-bottom: 10px;
    white-space: nowrap;
`


const StatText = styled.span`
    ${font({Fmax: 18, Fmin:16, weight:600, color: myTheme.colors.descriptionPostText, letterSpacing: '0.01em'})}
    white-space: nowrap;
`

export const S = {
    StatisticSection,
    StatCard,
    StatisticItems,
    StatValue,
    StatText
}