import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";
import Button from "@/components/ui/Button/Button";

import styles from './Item.module.css'

const Item = ({title, text, button, img}) => {
    return (
        <div className={styles.item}>
            <div className={styles.right}>
                <img className={styles.img} src={img.src} alt={img.alt}/>
            </div>
            <div className={styles.offer}>
                <Title className={styles.title} level='h2' dangerouslySetInnerHTML={{__html: title}}/>
                <Text className={styles.text}>{text}</Text>
                <Button className={styles.button} primary>{button}</Button>
            </div>
        </div>
    )
}

export default Item