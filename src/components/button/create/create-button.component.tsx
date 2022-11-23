import React, { FC, memo } from 'react';
import styles from './create-button.module.css';

type CreateButtonProps = { onClick: () => void };

const CreateButton: FC<CreateButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.Button} onClick={onClick}>
            +
        </button>
    );
};

export default memo(CreateButton);
