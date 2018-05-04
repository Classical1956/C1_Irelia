import React from 'react';
import styles from './simpleRespositoriesCell.scss';

interface SimpleRespositoriesCellProps {
    respositoriesName?: string;
    starredNumber?: number;
}

export const SimpleRespositoriesCell: React.SFC<SimpleRespositoriesCellProps> = ({
    respositoriesName,
    starredNumber,
}) => {
    return (
        <div className={styles.simpleRespositoriesCell}>
            <p>{JSON.stringify(respositoriesName)}</p>
        </div>
    );
};