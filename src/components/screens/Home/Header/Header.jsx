import {useRouter} from "next/router";

import headerTranslation from "@/data/header.json";

import Link from "next/link";
import Container from "@/components/ui/Container/Container";
import Icon from "@/components/ui/Icon/Icon";
import ThemeSwitcher from "@/components/screens/Home/Header/ThemeSwitcher/ThemeSwitcher";
import Button from "@/components/ui/Button/Button";

import styles from './Header.module.css'

const Header = () => {
    const {locale} = useRouter()

    const header = headerTranslation.filter(item => item.locale === locale)

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link className={styles.logo} href='/'>
                    <Icon id='logo' width={64} height={64}/>
                </Link>
                <nav className={styles.nav}>
                    {header[0].links.map((item, index) =>
                        <Link className={styles.link} href={item.link} key={index}>
                            {item.name}
                        </Link>
                    )}
                </nav>
                <div className={styles.buttons}>
                    <ThemeSwitcher/>
                    <Button className={styles.button}>{header[0].button}</Button>
                </div>
            </Container>
        </header>
    );
};

export default Header;