import {useRouter} from "next/router";

import sendTranslation from "@/data/features/send.json";

import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Send.module.css';

const Send = () => {
    const {locale} = useRouter()

    const send = sendTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.send}>
            <Title className={styles.title} level='h3'>{send[0].title}</Title>
            <Text className={styles.text} dangerouslySetInnerHTML={{__html: send[0].text}}/>
        </div>
    );
};

export default Send;