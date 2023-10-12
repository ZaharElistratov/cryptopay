import {useRouter} from "next/router";

import communityTranslation from "@/data/community.json";

import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";
import Button from "@/components/ui/Button/Button";
import Item from "@/components/screens/Home/Community/Item/Item";

import styles from './Community.module.css';

const Community = () => {
    const {locale} = useRouter()

    const community = communityTranslation.filter(item => item.locale === locale)

    return (
        <section className={styles.community}>
            <Container className={styles.container}>
                <Title className={styles.title} level='h2'>{community[0].title}</Title>
                <Text className={styles.text}>{community[0].text}</Text>
                <div className={styles.list}>
                    {community[0].list.map((item) =>
                        <Item img={item.img} text={item.text}/>
                    )}
                </div>
                <Button className={styles.button} primary>{community[0].button}</Button>
            </Container>
        </section>
    );
};

export default Community;