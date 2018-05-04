import {
    BaseStore
} from '../../base';
import { ListView } from 'antd-mobile';
import { observable, computed, action, runInAction } from 'mobx';
import { IRepositories } from '../../interface';
import { UserService } from '../../service';

export default class HomeStore extends BaseStore {

    getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    ds = new ListView.DataSource({
        getRowData: this.getRowData,
        getSectionHeaderData: this.getSectionData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    @observable
    overviewDataSource = {
        starred: observable.array<IRepositories>(),
        contribute: observable.array(),
    };

    @observable
    tabTitles = [{
        title: 'Overview',
    }, {
        title: 'Discover'
    }];

    loadData() {
        this.loadStarredRespositories();
    }

    @action
    async loadStarredRespositories() {
        try {
            const response = await UserService.fetchStarredRepositories();
            console.log('====================================');
            console.log('loadStarredRespositories =>', response);
            console.log('====================================');
            runInAction(() => {
                this.overviewDataSource.starred.clear();
                if (response.result) {
                    this.overviewDataSource.starred.push(...response.data);
                } else {
                    // TODO: 处理error 情况
                }
            });
        } catch (error) {
        }
    }

    @computed
    get fetchTabTitles() {
        return this.tabTitles.slice();
    }

    @computed
    get fetchOverviewDatas() {
        let dataBlob = {};
        let sectionIDs = Array();
        let rowIDs = Array();
        Object.keys(this.overviewDataSource).forEach((item, index) => {
            sectionIDs.push(item);
            dataBlob[item] = item;
            rowIDs[index] = [];
            this.overviewDataSource[item].forEach((nItem, nIndex) => {
                const key = `s_${index}_r_${nIndex}`;
                rowIDs[index].push(key);
                dataBlob[key] = nItem;
            });
        });
        const dss = this.ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
        console.log('====================================');
        console.log('fetchOverviewDatas =>', dss);
        console.log('====================================');
        return dss;
    }
}