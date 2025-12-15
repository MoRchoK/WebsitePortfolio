import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
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
        <Statisticstyled>
            <Container >
                <WrapperComponent className={'WrapperStatistic'} flexdirection={'row'}  gap={'80px'} justifycontent={'center'} alignitems={'center'}>
            {stats.map((item, index) => (
                <WrapperComponent className={'WrapperItem'} width={'220px'} alignitems={"center"} key={index} justifycontent={'center'}  >
                    <StatValue>{item.value}
                    </StatValue>
                    <StatText >
                        {item.text}
                    </StatText>
                </WrapperComponent>
            ))}
                </WrapperComponent>
            </Container>
        </Statisticstyled>
    )
}

const Statisticstyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    padding: 150px 0;
    background-color: ${myTheme.colors.BgBrandsSection};
    
    
    @media ${myTheme.media.large} {
        .WrapperStatistic{
            flex-wrap: wrap;
        }
        .WrapperItem{
            max-width: 280px;
            width: 100%;
        }
    }
`
const StatValue = styled.span`
    ${font({Fmax: 105, Fmin:90, color: myTheme.colors.statValueText})}
    letter-spacing: -0.04em;
    margin-bottom: 10px;
    white-space: nowrap;
`
const StatText = styled.span`
    ${font({Fmax: 18, Fmin:16, weight:600, color: myTheme.colors.descriptionPostText})}
    letter-spacing: 0.01em;
    white-space: nowrap;
`


