import {useRouter} from "next/router";

import statisticsTranslation from "@/data/features/statistics.json";

import Image from "next/image";
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Statistics.module.css';

const Statistics = () => {
    const {locale} = useRouter()

    const statistics = statisticsTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.statistics}>
            <Image src='' alt=''/>
            <Title className={styles.title} level='h3'>{statistics[0].title}</Title>
            <Text className={styles.text} dangerouslySetInnerHTML={{__html: statistics[0].text}}/>
        </div>
    );
};

export default Statistics;