import React, { FC, memo, MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import styles from './modal.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

type ModalProps = {
    title: string;
    visible?: boolean;
    onClose?: () => void;
    children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ title, visible, onClose, children }) => {
    const handleModalClick = useCallback((e: MouseEvent) => {
        e.stopPropagation();
    }, []);

    useEffect(() => {
        window.document.documentElement.style.overflow = visible ? 'hidden' : '';
    }, [visible]);

    if (!visible) return null;
    return (
        <div className={styles.ModalMask} onClick={onClose}>
            <div className={styles.Modal} onClick={handleModalClick}>
                <div className={styles.Header}>
                    {title}
                    <CloseIcon className={styles.Close} onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default memo(Modal);
