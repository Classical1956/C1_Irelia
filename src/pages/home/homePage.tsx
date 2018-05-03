import React from 'react';
import { observer } from 'mobx-react';
import styles from './homePage.scss';
import {
    BasePage
} from '../../base';
import {
    Tabs,
    ListView,
} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {
    SimpleRespositoriesCell
} from '../../component/home';
import { HomeStore } from '../../stores/home';
import { withRouter } from 'react-router';
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
                <ListView
                    useBodyScroll={true}
                    className={styles.listView}
                    dataSource={this.pageStore.fetchOverviewDatas}
                    renderRow={this.renderOverviewItem}
                    renderSectionWrapper={this.renderSectionWrapperItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </div>
        );
    }
    private renderOverviewItem = (rowData) => {
        console.log('====================================');
        console.log('renderOverviewItem arg =>', rowData);
        console.log('====================================');
        return (
            <SimpleRespositoriesCell
                respositoriesName={rowData}
            />
        );
    }
    private renderSectionWrapperItem = (sectionId) => {
        console.log('====================================');
        console.log('renderSectionItem arg =>', sectionId);
        console.log('====================================');
        return (
            <StickyContainer
                key={`s_${sectionId}_c`}
                className={styles.stickyContainer}
            />
        );
    }
    private renderSectionHeader = (sectionData) => {
        console.log('====================================');
        console.log('renderSectionHeader arg =>', sectionData);
        console.log('====================================');
        return (
            <Sticky>
                {({ style }) => <div className={styles.sticky} style={{ ...style }}>{sectionData}</div>}
            </Sticky>
        );
    }
}

export default withRouter(HomePage);