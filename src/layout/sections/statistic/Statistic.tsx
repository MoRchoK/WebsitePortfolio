import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {Container} from "../../../container/Container.ts";
import {font} from "../../style/common/Common.ts";


type statsType = {
    value: string,
    text: string,

}
export function Statistic () {

    const stats: Array<statsType> = [
        {
            value: '720+',
            text: 'Projects Completed',
        },
        {
            value: '920+',
            text: 'Products Sold',
        },
        {
            value: '25+',
            text: 'Awards Received',
        },
        {
            value: '700+',
            text: 'Happy Clients',
        },
    ]

    return (
        <StatisticStyled>
            <Container >
                <StatisticItems>
            {stats.map((item, index) => (
                <StatCard key={index} >
                    <StatValue>{item.value}
                    </StatValue>
                    <StatText >
                        {item.text}
                    </StatText>
                </StatCard>
            ))}
                </StatisticItems>
            </Container>
        </StatisticStyled>
    )
}

const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${myTheme.media.large} {
        width: 30%;
    }
    @media ${myTheme.media.mobile} {
        width: 100%;
    }
`

const StatisticItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 80px;
    
    @media ${myTheme.media.large} {
        justify-content: center;
        flex-wrap: wrap;
    }
}
`

const StatisticStyled = styled.section`
    padding: 150px 0;
    background-color: ${myTheme.colors.BgBrandsSection};
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


