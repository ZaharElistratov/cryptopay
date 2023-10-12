import Container from "@/components/ui/Container/Container";
import Currency from "@/components/screens/Home/Features/Currency/Currency";
import Commission from "@/components/screens/Home/Features/Commission/Commission";
import Statistics from "@/components/screens/Home/Features/Statistics/Statistics";
import Exchange from "@/components/screens/Home/Features/Exchange/Exchange";
import Send from "@/components/screens/Home/Features/Send/Send";
import Payments from "@/components/screens/Home/Features/Payments/Payments";

import styles from './Features.module.css';

const Features = () => {
    return (
        <section className={styles.features}>
            <Container className={styles.container}>
                <Currency/>
                <Commission/>
                <Statistics/>
                <Exchange/>
                <Send/>
                <Payments/>
            </Container>
        </section>
    );
};

export default Features;