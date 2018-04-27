import React from 'react';
import {
    BasePage
} from '../../base';
import { withRouter } from 'react-router';
import pageStyle from '../../styles/page.scss';
import {
    ProfileStore,
} from '../../stores/profile';
import { CacheService, CacheKeys } from '../../service';
import { Button } from 'antd-mobile';
import { PageRouter } from '../../stores';

class ProfilePage extends BasePage<any> {
    pageStore: ProfileStore;
    initPageStore() {
        this.pageStore = new ProfileStore();
        this.pageStore.showContent();
    }
    public renderContent() {
        return (
            <div className={pageStyle.pageContent}>
                <Button type="ghost" onClick={this.loginOut}>
                    退出登录
                    </Button>
            </div>
        );
    }

    private loginOut = () => {
        CacheService.clearDataByCacheKey(CacheKeys.LOGIN_INFO);
        PageRouter.loginOut();
    }
}
export default withRouter(ProfilePage);