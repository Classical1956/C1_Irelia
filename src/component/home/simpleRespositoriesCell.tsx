import React from 'react';
import styles from './simpleRespositoriesCell.scss';

interface SimpleRespositoriesCellProps {
    respositoriesName?: string;
    starredNumber?: number;
}

export const SimpleRespositoriesCell: React.SFC<SimpleRespositoriesCellProps> = (
    respositoriesName,
    starredNumber,
) => {
    console.log('====================================');
    console.log('respositoriesName =>', respositoriesName);
    console.log('====================================');
    return (
        <div className={styles.simpleRespositoriesCell}>
            <p>{JSON.stringify(respositoriesName)}</p>
        </div>
    );
};