import React from 'react';
import styles from './simpleRespositoriesCell.scss';
import classnames from 'classnames';
import globalStyles from '../../styles/page.scss';
import { C1Icon } from '../common';

interface SimpleRespositoriesCellProps {
    respositoriesName?: string;
    starredNumber?: number;
}

const leftTitleMerge = classnames(styles.respositoriesName, globalStyles.ml1);
const topLineMerge = classnames(styles.simpleRespositoriesCell, globalStyles.topLine);
export const SimpleRespositoriesCell: React.SFC<SimpleRespositoriesCellProps> = ({
    respositoriesName,
    starredNumber,
}) => {

    return (
        <div className={topLineMerge}>
            <div className={styles.leftItem}>
                <C1Icon className={styles.simpleIcon} iconName="icon-yemian" />
                <p className={leftTitleMerge}>{respositoriesName}</p>
            </div>
            <div className={styles.rightItem}>
                <p className={styles.starred}>{starredNumber}</p>
                <C1Icon className={styles.simpleIcon} iconName="icon-xing" />
            </div>
        </div>
    );
};