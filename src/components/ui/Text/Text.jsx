import cn from "classnames";

import styles from './Text.module.css'

const Text = ({children, className, ...props}) => {
    return (
        <p className={cn(styles.text, className)} {...props}>
            {children}
        </p>
    );
};

export default Text;