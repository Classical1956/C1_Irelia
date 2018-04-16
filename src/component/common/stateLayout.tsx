import React from 'react';
import {
    Loading
} from './loading';
import {
    LAYOUT_STATE
} from '../../constants';
import styles from './stateLayout.scss';

export interface StateLayoutProps {
    layouState: string;
    stateImg?: any;
    stateTip?: string | React.ReactNode;
    onRetry?(): void;
}

/**
 * 状态控件
 * @param layoutState 
 * @param stateImg
 * @param stateTip
 * @param onRetry 
 */
export const StateLayout: React.SFC<StateLayoutProps> = ({
    layouState,
    stateImg = undefined,
    stateTip = '没有数据',
    onRetry,
}) => {

    switch (layouState) {
        case LAYOUT_STATE.LOADING:
            {
                return (
                    <div className={styles.fullContent}>
                    <Loading />
                    </div>
                    
                );
            }
        case LAYOUT_STATE.EMPTY:
            {

                return (
                    <div className={styles.fullContent}>
                        <img src={stateImg} className={styles.img} />
                        <p className={styles.desc}>{stateTip}</p>
                    </div>
                );
            }
        default: {
            return <div />;
        }
    }
};
