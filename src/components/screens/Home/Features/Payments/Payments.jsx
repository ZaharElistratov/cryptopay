import {useRouter} from "next/router";

import paymentsTranslation from "@/data/features/payments.json";

import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Payments.module.css';

const Payments = () => {
    const {locale} = useRouter()

    const payments = paymentsTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.payments}>
            <Title className={styles.title} level='h3'>{payments[0].title}</Title>
            <Text className={styles.text} dangerouslySetInnerHTML={{__html: payments[0].text}}/>
        </div>
    );
};

export default Payments;