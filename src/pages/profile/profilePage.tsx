import React from 'react';
import {
    BasePage
} from '../../base';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import pageStyle from '../../styles/page.scss';
import {
    ProfileStore,
} from '../../stores/profile';
import { Button } from 'antd-mobile';
import styles from './profilePage.scss';
import { IUser } from '../../interface';

class ProfilePage extends BasePage<any> {
    pageStore: ProfileStore;

    showNavigationBar() {
        return false;
    }

    initPageStore() {
        this.pageStore = new ProfileStore();
    }
    public renderContent() {
        const userInfo = this.pageStore.fetchUserInfo;
        return (
            <div className={pageStyle.pageContent}>
                {this.renderTop(userInfo)}
                {this.renderActivityCell(userInfo)}
                <Button type="ghost" onClick={this.pageStore.loginOut}>
                    退出登录
                    </Button>
            </div>
        );
    }

    private renderTop(userInfo: IUser) {
        const classname = classnames(styles.time, styles.timeBetween);
        return (
            <div className={styles.profileTop}>
                <img className={styles.profileHead} src={userInfo.avatar_url} />
                <p className={styles.profileName}>{userInfo.name}</p>
                <div className={styles.profileTimeContainer}>
                    <p className={styles.time}>创建时间：{userInfo.process_createTime}</p>
                    <p className={classname}>最后更新时间：{userInfo.process_updateTime}</p>
                </div>
            </div>
        );
    }

    private renderActivityCell(userInfo: IUser) {
        return (
            <div className={styles.profileActivity}>
                {this.renderActivityItem(userInfo.followers, 'followers')}
                {this.renderActivityItem(userInfo.public_repos, 'publicRepositories')}
                {this.renderActivityItem(userInfo.following, 'following')}
            </div>
        );
    }
    private renderActivityItem(count: number = 0, title: string = '') {
        return (
            <div className={styles.activityItem}>
                <p className={styles.count}>{count}</p>
                <p className={styles.title}>{title}</p>
            </div>
        );
    }
}
export default withRouter(ProfilePage);