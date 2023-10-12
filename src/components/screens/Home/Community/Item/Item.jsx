import Image from "next/image";
import Text from "@/components/ui/Text/Text";

import styles from './Item.module.css';

const Item = ({img, text}) => {
    return (
        <a className={styles.item} href='/'>
            <Image className={styles.icon} src={img.src} width={96} height={96} alt={img.alt}/>
            <Text className={styles.text}>{text}</Text>
        </a>
    );
};

export default Item;