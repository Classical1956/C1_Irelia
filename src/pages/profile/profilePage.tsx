import React from 'react';
import {
    BasePage
} from '../../base';
import { withRouter } from 'react-router';
import pageStyle from '../../styles/page.scss';

class ProfilePage extends BasePage<any> {
    public renderContent() {
        return (
            <div className={pageStyle.pageContent}>
                ss
            </div>
        );
    }
}
export default withRouter(ProfilePage);