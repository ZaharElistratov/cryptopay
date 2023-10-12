import styles from './Step.module.css';
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";

const Step = ({number, title, text, list, img}) => {
    return (
        <div className={styles.step}>
            <div className={styles.offer}>
                <div className={styles.number}>{number}</div>
                <Title className={styles.title} level='h3' dangerouslySetInnerHTML={{__html: title}}/>
                {text &&
                    <Text className={styles.text}>{text}</Text>
                }
                <ul className={styles.list}>
                    {list?.map((item) =>
                        <li className={styles.item} dangerouslySetInnerHTML={{__html: item}}/>
                    )}
                </ul>
            </div>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={img.src} alt={img.alt}/>
            </div>
        </div>
    );
};

export default Step;