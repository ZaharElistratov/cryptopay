import {useTheme} from "next-themes";

import Icon from "@/components/ui/Icon/Icon";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
    const {resolvedTheme, setTheme} = useTheme()

    const handleChangeTheme = () => {
        resolvedTheme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <button className={styles.theme} onClick={handleChangeTheme}>
            <Icon id={resolvedTheme === 'light' ? 'light-theme' : 'dark-theme'} width={40} height={40}/>
        </button>
    );
};

export default ThemeSwitcher;