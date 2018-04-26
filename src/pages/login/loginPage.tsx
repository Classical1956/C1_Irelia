import React from 'react';
import { BasePage } from '../../base';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
import pageStyles from '../../styles/page.scss';
import { LoginStore } from '../../stores/login';
import styles from './loginPage.scss';
import { CacheService } from '../../service';

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
        return (
            <div className={pageStyles.pageContent}>
                <form
                    action="."
                    onSubmit={this.onCompleteAction}
                    className={styles.form}
                >
                    <input
                        className={styles.input}
                        type="text"
                    />
                    <button type="submit" className={styles.sendBtn}>保存</button>
                </form>
            </div>
        );
    }

    private onCompleteAction = (event: any) => {
        event.defaultPrevented();
        CacheService.saveLoginInfo('sssss');
    }
}

export default withRouter(LoginPage);