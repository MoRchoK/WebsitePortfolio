import styled from "styled-components";
import {myTheme} from "../../style/Theme/Theme.styled.tsx";
import {WrapperComponent} from "../../../components/wrapperComponent/WrapperComponent.tsx";
import {Container} from "../../../container/Container.ts";



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
                <WrapperComponent flexdirection={'row'}   flexwrap={'wrap'} gap={'80px'} justifycontent={'center'} alignitems={'center'}>
            {stats.map((item, index) => (
                <WrapperComponent width={'220px'} alignitems={"center"} key={index} justifycontent={'center'}  >
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
    


`
const StatValue = styled.span`
    font-size: 105px;
    color: ${myTheme.colors.statValueText};
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 100%;
    margin-bottom: 10px;
`
const StatText = styled.span`
    font-size: 18px;
    color: ${myTheme.colors.descriptionPostText};
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 100%;
`


