import {useRouter} from "next/router";
import footerTranslation from "@/data/footer.json";

import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import Icon from "@/components/ui/Icon/Icon";
import Button from "@/components/ui/Button/Button";
import Text from "@/components/ui/Text/Text";

import styles from './Footer.module.css';

const Footer = () => {
    const {locale} = useRouter()

    const footer = footerTranslation.filter(item => item.locale === locale)

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <Link className={styles.logo} href='/'>
                        <Icon id='logo' width={64} height={64}/>
                    </Link>
                    <nav className={styles.nav}>
                        {footer[0].links.map((item, index) =>
                            <Link className={styles.link} href={item.link} key={index}>
                                {item.name}
                            </Link>
                        )}
                    </nav>
                    <Button>{footer[0].button}</Button>
                </div>
                <div className={styles.bottom}>
                    <Text className={styles.faq}>{footer[0].faq}</Text>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;