import cn from "classnames";

import styles from './Button.module.css'

const Button = ({children, className, primary, ...props}) => {
    return (
        <button
            className={cn(styles.button, primary && styles.primary, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;