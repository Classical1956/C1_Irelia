import React from 'react';
import {
    BasePage
} from '../../base';
import { withRouter } from 'react-router';
import pageStyle from '../../styles/page.scss';
import {
    ProfileStore,
} from '../../stores/profile';
class ProfilePage extends BasePage<any> {
    pageStore: ProfileStore;
    initPageStore() {
        this.pageStore = new ProfileStore();
    }
    public renderContent() {
        return (
            <div className={pageStyle.pageContent}>
                ss
            </div>
        );
    }
}
export default withRouter(ProfilePage);