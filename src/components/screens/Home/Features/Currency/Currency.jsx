import {useRouter} from "next/router";

import currencyTranslation from "@/data/features/currency.json";

import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Currency.module.css';
import Item from "@/components/screens/Home/Features/Currency/Item/Item";

const Currency = () => {
    const {locale} = useRouter()

    const currency = currencyTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.currency}>
            <Title className={styles.title} level='h3'>{currency[0].title}</Title>
            <Text className={styles.text}>{currency[0].text}</Text>
            <div className={styles.list}>
                {currency[0].list?.map((item) =>
                    <Item img={item.img} text={item.text}/>
                )}
            </div>
        </div>
    );
};

export default Currency;