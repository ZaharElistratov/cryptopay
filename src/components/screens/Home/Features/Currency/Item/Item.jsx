import Image from "next/image";
import Text from "@/components/ui/Text/Text";

import styles from './Item.module.css';

const Item = ({img, text}) => {
    return (
        <div className={styles.item}>
            <Image className={styles.icon} src={img.src} width={96} height={96} alt={img.alt}/>
            <Text className={styles.text}>{text}</Text>
        </div>
    );
};

export default Item;