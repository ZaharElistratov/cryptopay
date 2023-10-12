import {useTheme} from "next-themes";
import {useRouter} from "next/router";

import introTranslation from '@/data/intro.json'

import Image from "next/image";

import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";
import Button from "@/components/ui/Button/Button";
import Bots from "@/components/screens/Home/Intro/Bots/Bots";


import styles from './Intro.module.css'

const Intro = () => {
    const {resolvedTheme} = useTheme()

    const { locale } = useRouter()

    const intro = introTranslation.filter(item => item.locale === locale)

    return (
        <section className={styles.intro}>
            <Container className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.offer}>
                        <Title className={styles.title} level='h1'>{intro[0].title}</Title>
                        <Text className={styles.text}>{intro[0].text}</Text>
                        <Button className={styles.button} primary>{intro[0].button}</Button>
                    </div>
                    <Bots/>
                </div>
                <Image
                    className={styles.img}
                    src={resolvedTheme === 'light' ? intro[0].img.light : intro[0].img.dark}
                    width={340} height={700} alt=''
                    priority
                />
            </Container>
        </section>
    );
};

export default Intro;