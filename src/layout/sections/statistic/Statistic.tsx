import {Container} from "../../../container/Container.ts";
import {S} from "./statistic_styled.ts";

import {StatiscicCard} from "./StatisticCard/StatisticCard.tsx";


export type statsType = {
    value: string,
    text: string,
}
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

export const Statistic: React.FC = () => {
    return (
        <S.StatisticSection>
            <Container >
                <S.StatisticItems alignitems={'center'} justifycontent={'space-between'} gap={'80px'}>
            {stats.map((item, index) => (
                <StatiscicCard item={item} index={index} key={index} />
            ))}
                </S.StatisticItems>
            </Container>
        </S.StatisticSection>
    )
}


