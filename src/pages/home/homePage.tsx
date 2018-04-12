import React from 'react';
import { observer } from 'mobx-react';
import styles from './homePage.scss';
@observer
export default class HomePage extends React.PureComponent {
    public render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <p>sss</p>
            </div>
        );
    }

    private onClick = () => {
        window.location.href = 'http://www.baidu.com';
    }
}