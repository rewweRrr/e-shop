import React, { memo, FC, ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

type ButtonProps = { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
    const innerClassName = className ? `${className} ${styles.Button}` : styles.Button;
    return (
        <button className={innerClassName} {...rest}>
            {children}
        </button>
    );
};

export default memo(Button);
