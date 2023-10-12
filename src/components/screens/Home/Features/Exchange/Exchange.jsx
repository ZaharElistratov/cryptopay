import {useRouter} from "next/router";

import exchangeTranslation from "@/data/features/exchange.json";

import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Exchange.module.css';

const Exchange = () => {
    const {locale} = useRouter()

    const exchange = exchangeTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.exchange}>
            <Title className={styles.title} level='h3'>{exchange[0].title}</Title>
            <Text className={styles.text} dangerouslySetInnerHTML={{__html: exchange[0].text}}/>
        </div>
    );
};

export default Exchange;