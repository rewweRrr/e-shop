import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { DESCRIPTION_MAX_LENGTH } from '../../constants/component.constants';
import styles from './description.module.css';

type DescriptionProps = {
    text: string;
    maxLength?: number;
};

const Description: FC<DescriptionProps> = ({ text, maxLength = DESCRIPTION_MAX_LENGTH }) => {
    const [detailsOpened, setDetailsOpened] = useState(false);

    const detailsButtonVisible = useMemo(() => !!text && maxLength && text.length > maxLength, [maxLength, text]);

    const updatedText = useMemo(() => {
        if (!detailsButtonVisible) return text;
        if (detailsOpened) return text;

        return text.slice(0, maxLength) + '...';
    }, [detailsButtonVisible, detailsOpened, maxLength, text]);

    const detailsButtonText = useMemo(() => (detailsOpened ? 'Hide Details' : 'Show Details'), [detailsOpened]);

    const handleDetailsButtonClick = useCallback(() => {
        setDetailsOpened(prevState => !prevState);
    }, []);

    return (
        <div className={styles.Description}>
            {updatedText}
            {detailsButtonVisible && (
                <span className={styles.DetailsButton} onClick={handleDetailsButtonClick}>
                    {detailsButtonText}
                </span>
            )}
        </div>
    );
};

export default memo(Description);
