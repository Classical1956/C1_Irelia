import React from 'react';
import {
    BasePage
} from '../../base';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {
    ActivityStore,
} from '../../stores';
import styles from './activityPage.scss';
import {
    ActivityCell
} from '../../component/activity';
import {
    ListView,
} from 'antd-mobile';

@observer
class ActivityPage extends BasePage<ActivityStore> {

    pageStore: ActivityStore;

    constructor(props: any) {
        super(props);
    }
    navigationTitle() {
        return 'activity';
    }
    showNavigationBar() {
        return false;
    }

    initPageStore() {
        this.pageStore = new ActivityStore();
        setTimeout(() => this.pageStore.showContent(), 1000);
    }

    public renderContent() {
        return (
            <div className={styles.pageContent}>
                <ListView
                    className={styles.listView}
                    initialListSize={20}
                    renderRow={this.renderItem}
                    dataSource={this.pageStore.fetchActivityList}
                />
            </div>
        );
    }

    private renderItem = (rowData: any, sectionId = '0', rowId = '0') => {
        return (
            <ActivityCell
                index={parseInt(rowId, 10)}
                stargazers_count={parseInt(rowId, 10)}
                full_name={rowId}
            />
        );
    }
}

export default withRouter(ActivityPage);