import React, { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useState } from 'react';
import styles from './input.module.css';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ value, defaultValue, onChange, className, ...rest }) => {
    const innerClassName = className ? `${className} ${styles.Input}` : styles.Input;

    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setInnerValue(e.target.value);
            onChange?.(e);
        },
        [onChange]
    );

    return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} />;
};

export default memo(Input);
