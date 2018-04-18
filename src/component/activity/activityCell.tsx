import React from 'react';
import classNames from 'classnames';
import styles from './activityCell.scss';

export interface ActivityCellProps {
    index: number;
    full_name?: string;
    stargazers_count?: number;
}

/**
 * 用于activity cell
 * @param index 
 * @param full_name
 * @param stargazers_count
 */
export const ActivityCell: React.SFC<ActivityCellProps> = ({
    index,
    full_name = '',
    stargazers_count = 0
}) => {

    let borderStyle = index !== 0 ? styles.list_heading : '';
    let itemStyle = classNames(styles.list_item, borderStyle);
    console.log('====================================');
    console.log('uten srtles =>', itemStyle);
    console.log('====================================');
    return (
        <div className={itemStyle}>
            <p className={styles.list_item_title}>{full_name}</p>
            <strong>{stargazers_count}</strong>
        </div>
    );
};