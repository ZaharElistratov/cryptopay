import Container from "@/components/ui/Container/Container";
import Title from "@/components/ui/Title/Title";
import Text from "@/components/ui/Text/Text";
import Button from "@/components/ui/Button/Button";

import styles from './Api.module.css';

const Api = () => {
    return (
        <section className={styles.api}>
            <Container className={styles.container}>
                <div>
                    <Title className={styles.title} level='h2'>Crypto Pay API</Title>
                    <Text className={styles.text}>
                        Explore available methods and types and integrate them in any programming language.
                    </Text>
                    <Button className={styles.button}>Open API Docs</Button>
                </div>
            </Container>
        </section>
    );
};

export default Api;