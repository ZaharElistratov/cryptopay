import cn from "classnames";

import styles from './Title.module.css'

const Title = ({children, className, level, ...props}) => {
    const TitleLevel = level
    return (
        <TitleLevel className={cn(styles.title, className)} {...props}>
            {children}
        </TitleLevel>
    );
};

export default Title;