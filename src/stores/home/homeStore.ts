import {
    BaseStore
} from '../../base';
import { ListView } from 'antd-mobile';
import { observable, computed, action } from 'mobx';

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
        dataBlob: {},
        sectionIDs: Array(),
        rowIDs: Array(),
    };

    @observable
    tabTitles = [{
        title: 'Overview',
    }, {
        title: 'Discover'
    }];

    loadData() {
        this.processData();
    }

    @action
    processData = () => {
        const provinceData = {
            A: [
                {
                    value: '阿里',
                    label: '阿里',
                }, {
                    value: '啊啊啊',
                    label: '啊啊啊',
                }, {
                    value: '阿拉斯加',
                    label: '阿拉斯加',
                }, {
                    value: '阿骨打',
                    label: '阿骨打',
                }, {
                    value: '阿里',
                    label: '阿里',
                }, {
                    value: '啊啊啊',
                    label: '啊啊啊',
                }, {
                    value: '阿拉斯加',
                    label: '阿拉斯加',
                }, {
                    value: '阿骨打',
                    label: '阿骨打',
                }, {
                    value: '阿里',
                    label: '阿里',
                }, {
                    value: '啊啊啊',
                    label: '啊啊啊',
                }, {
                    value: '阿拉斯加',
                    label: '阿拉斯加',
                }, {
                    value: '阿骨打',
                    label: '阿骨打',
                }

            ],
            B: [
                {
                    value: '阿里b',
                    label: '阿里b',
                }, {
                    value: '啊啊啊b',
                    label: '啊啊啊b',
                }, {
                    value: '阿拉斯加b',
                    label: '阿拉斯加b',
                }, {
                    value: '阿骨打b',
                    label: '阿骨打b',
                }, {
                    value: '阿里b',
                    label: '阿里b',
                }, {
                    value: '啊啊啊b',
                    label: '啊啊啊b',
                }, {
                    value: '阿拉斯加b',
                    label: '阿拉斯加b',
                }, {
                    value: '阿骨打b',
                    label: '阿骨打b',
                }, {
                    value: '阿里b',
                    label: '阿里b',
                }, {
                    value: '啊啊啊b',
                    label: '啊啊啊b',
                }, {
                    value: '阿拉斯加b',
                    label: '阿拉斯加b',
                }, {
                    value: '阿骨打b',
                    label: '阿骨打b',
                }
            ],
            C: [
                {
                    value: 'c阿里',
                    label: 'c阿里',
                }, {
                    value: 'c啊啊啊',
                    label: 'c啊啊啊',
                }, {
                    value: 'c阿拉斯加',
                    label: 'c阿拉斯加',
                }, {
                    value: 'c阿骨打',
                    label: 'c阿骨打',
                }, {
                    value: 'c阿里',
                    label: 'c阿里',
                }, {
                    value: 'c啊啊啊',
                    label: 'c啊啊啊',
                }, {
                    value: 'c阿拉斯加',
                    label: 'c阿拉斯加',
                }, {
                    value: 'c阿骨打',
                    label: 'c阿骨打',
                }, {
                    value: 'c阿里',
                    label: 'c阿里',
                }, {
                    value: 'c啊啊啊',
                    label: 'c啊啊啊',
                }, {
                    value: 'c阿拉斯加',
                    label: 'c阿拉斯加',
                }, {
                    value: 'c阿骨打',
                    label: 'c阿骨打',
                }
            ]
        };

        let dataBlob = {};
        let sectionIDs = Array();
        let rowIDs = Array();
        Object.keys(provinceData).forEach((item, index) => {
            console.log('provinceData =>', item, index);
            sectionIDs.push(item);
            dataBlob[item] = item;
            rowIDs[index] = [];
            provinceData[item].forEach((jj) => {
                rowIDs[index].push(jj.value);
                dataBlob[jj.value] = jj.label;
            });
        });
        console.log('====================================');
        console.log('rowIDs =>', this.ds);
        console.log('====================================');

        try {
            this.overviewDataSource.dataBlob = dataBlob;
            this.overviewDataSource.rowIDs = rowIDs;
            this.overviewDataSource.sectionIDs = sectionIDs;
        } catch (error) {
            console.log('====================================');
            console.log('error =>', error);
            console.log('====================================');
        }

    }
    @computed
    get fetchTabTitles() {
        return this.tabTitles.slice();
    }
    @computed
    get fetchOverviewDatas() {
        return this.ds.cloneWithRowsAndSections(this.overviewDataSource.dataBlob, this.overviewDataSource.sectionIDs, this.overviewDataSource.rowIDs);
    }
}