import React from 'react';
import { BasePage } from '../../base';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
import pageStyles from '../../styles/page.scss';
import { LoginStore } from '../../stores/login';
import styles from './loginPage.scss';

@observer
class LoginPage extends BasePage<any> {
    protected pageStore: LoginStore;

    showNavigationBar() {
        return false;
    }
    initPageStore() {
        this.pageStore = new LoginStore();
        this.pageStore.showContent();
    }
    public renderContent() {
        const mergeClassName = classnames(pageStyles.pageContent, styles.loginBackground, styles.loginPage);
        const userInputClass = classnames(styles.input, styles.userInput);
        const submitClass = classnames(styles.sendBtn, this.pageStore.fetchSubmitDisable ? styles.disableSend : '');
        return (
            <div className={mergeClassName}>
                <form
                    action="."
                    onSubmit={this.pageStore.loginAction}
                    className={styles.form}
                >
                    <input
                        className={userInputClass}
                        value={this.pageStore.fetchUserName}
                        type="text"
                        placeholder="请输入用户名"
                        onChange={this.pageStore.updateUserName}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="请输入密码"
                        onChange={this.pageStore.updatePassWord}
                    />
                    <button disabled={this.pageStore.fetchSubmitDisable} type="submit" className={submitClass}>Sign in!</button>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginPage);