import {useRouter} from "next/router";

import introTranslation from "@/data/intro.json";

import Image from "next/image";
import Text from "@/components/ui/Text/Text";

import styles from './Bots.module.css'

const Bots = () => {
    const {locale} = useRouter()

    const intro = introTranslation.filter(item => item.locale === locale)

    return (
        <div className={styles.bots}>
            <div className={styles.list}>
                {intro[0].bots.list.map((item, index) =>
                    <a className={styles.item} href={item.link} key={index}>
                        <Image
                            className={styles.icon}
                            src={item.img}
                            width={88} height={88}
                            alt=''/>
                    </a>
                )}
            </div>
            <Text className={styles.text}>{intro[0].bots.text}</Text>
        </div>
    );
};

export default Bots;