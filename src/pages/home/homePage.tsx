import React from 'react';
import { observer } from 'mobx-react';
import styles from './homePage.scss';

@observer
export default class HomePage extends React.PureComponent {
    public render() {
        console.log('====================================');
        console.log('render homepage props =>', this.props);
        console.log('====================================');
        return (
            <div className={styles.pageContent} onClick={this.onClick}>
                <svg className="icon icons" aria-hidden="true"><use xlinkHref="#icon-github" /></svg>
            </div>
        );
    }
    private onClick = () => {
        window.location.href = 'http://www.baidu.com';
    }
}