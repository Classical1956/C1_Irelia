import React from 'react';
import { observer } from 'mobx-react';
import styles from './homePage.scss';
import globalStyles from '../../styles/page.scss';
import classnames from 'classnames';
import {
    BasePage
} from '../../base';
import {
    Tabs,
} from 'antd-mobile';
import {
    SimpleRespositoriesCell
} from '../../component/home';
import { HomeStore } from '../../stores/home';
import { withRouter } from 'react-router';
import { IRepositories } from '../../interface';
@observer
class HomePage extends BasePage<HomeStore> {
    protected pageStore: HomeStore;
    initPageStore() {
        this.pageStore = new HomeStore();
        this.showAsStaticPage();
    }

    public render() {
        console.log('====================================');
        console.log('render homepage props =>', this.props);
        console.log('====================================');
        return (
            <div className={styles.pageContent}>
                <Tabs
                    tabs={this.pageStore.fetchTabTitles}
                >
                    {this.renderOverview()}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
      </div>
                </Tabs>

            </div>
        );
    }

    private renderOverview() {
        return (
            <div className={styles.tabContent}>
                {this.renderStarredBlock(this.pageStore.fetchStarrList)}
            </div>
        );
    }
    private renderOverviewItem = (repositories: IRepositories) => {
        return (
            <SimpleRespositoriesCell
                respositoriesName={repositories.full_name}
                starredNumber={repositories.stargazers_count}
            />
        );
    }

    private renderStarredBlock = (starredList: IRepositories[] = []) => {
        if (starredList.length === 0) {
            return undefined;
        }
        const boxMerge = classnames(styles.bubble, globalStyles.mt1, globalStyles.mb0);
        const titleMerge = classnames(styles.bubbleTitle, globalStyles.bgGray);
        return (
            <div className={boxMerge}>
                <h3 className={titleMerge}>Starred repositories</h3>
                <div className={globalStyles.list}>
                    {
                        starredList.map(this.renderOverviewItem)
                    }
                </div>
            </div>
        );
    }

}

export default withRouter(HomePage);