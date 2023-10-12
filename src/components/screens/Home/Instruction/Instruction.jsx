import {useRouter} from "next/router";

import instructionTranslation from "@/data/instruction.json";

import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Step from "@/components/screens/Home/Instruction/Step/Step";

import styles from './Instruction.module.css';

const Instruction = () => {
    const {locale} = useRouter()

    const instruction = instructionTranslation.filter(item => item.locale === locale)

    return (
        <section className={styles.instruction}>
            <Container className={styles.container}>
                <Title className={styles.title} level='h2' dangerouslySetInnerHTML={{__html: instruction[0].title}}/>
                <div className={styles.list}>
                    {instruction[0].steps?.map((item) =>
                        <Step number={item.number} title={item.title} text={item.text} list={item.list} img={item.img}/>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Instruction;