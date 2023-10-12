import {useRouter} from "next/router";

import commissionTranslation from "@/data/features/commission.json";

import Image from "next/image";
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

import styles from './Commission.module.css';

const Commission = () => {
    const {locale} = useRouter()

    const commission = commissionTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.commission}>
            <Image src='' alt=''/>
            <Title className={styles.title} level='h3'>{commission[0].title}</Title>
            <Text className={styles.text} dangerouslySetInnerHTML={{__html: commission[0].text}}/>
        </div>
    );
};

export default Commission;