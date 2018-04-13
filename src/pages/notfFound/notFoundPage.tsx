import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './notFoundPage.scss';

class NotFoundPage extends React.PureComponent<any, any> {
    public render() {
        return (
            <div className={styles.page}>
                <p onClick={this.goBack}>对不起，没有这个页面.</p>
            </div>
        );
    }

    private goBack = () => {
        this.props.history.goBack();
    }
}

export default withRouter(NotFoundPage);