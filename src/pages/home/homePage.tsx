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
                    className={styles.listView}
                    initialListSize={this.pageStore.fetchOverviewDatas.getRowCount}
                    dataSource={this.pageStore.fetchOverviewDatas}
                    renderRow={this.renderOverviewItem}
                    renderSectionWrapper={this.renderSectionWrapperItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </div>
        );
    }
    private renderOverviewItem = (rowData) => {
        // console.log('====================================');
        // console.log('renderOverviewItem arg =>', rowData);
        // console.log('====================================');
        return (
            <SimpleRespositoriesCell
                respositoriesName={rowData}
            />
        );
    }
    private renderSectionWrapperItem = (sectionId) => {
        // console.log('====================================');
        // console.log('renderSectionWrapperItem sectionId =>', sectionId);
        // console.log('====================================');
        let color = '#1122dd';
        if (sectionId === 'A') {
            color = '#ff7723';
        } else if (sectionId === 'B') {
            color = '#8711dd';
        } else {
            color = '#144222';
        }
        return (
            <div
                key={`s_${sectionId}_c`}
                className={styles.stickyContainer}
                style={{ backgroundColor: color, zIndex: 4 }}
            />
        );
    }
    private renderSectionHeader = (sectionData) => {
        console.log('====================================');
        console.log('renderSectionHeader arg =>', sectionData);
        console.log('====================================');
        return (

            <div className={styles.sticky} style={{zIndex: 3, backgroundColor: '#1199ff', color: 'white' }}>{sectionData}</div>

        );
    }
}

export default withRouter(HomePage);