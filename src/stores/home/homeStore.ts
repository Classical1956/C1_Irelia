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
    loadStarredRespositories() {
        
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
                    value: '阿里1',
                    label: '阿里1',
                }, {
                    value: '啊啊啊2',
                    label: '啊啊啊2',
                }, {
                    value: '阿拉斯加3',
                    label: '阿拉斯加3',
                }, {
                    value: '阿骨打4',
                    label: '阿骨打4',
                }, {
                    value: '阿里5',
                    label: '阿里5',
                }, {
                    value: '啊啊啊6',
                    label: '啊啊啊6',
                }, {
                    value: '阿拉斯加7',
                    label: '阿拉斯加7',
                }, {
                    value: '阿骨打8',
                    label: '阿骨打8',
                }

            ],
            B: [
                {
                    value: 'b阿里b',
                    label: 'b阿里b',
                }, {
                    value: 'b啊啊啊b',
                    label: 'b啊啊啊b',
                }, {
                    value: 'b阿拉斯加b',
                    label: 'b阿拉斯加b',
                }, {
                    value: 'b阿骨打b',
                    label: 'b阿骨打b',
                }, {
                    value: 'b阿里b1',
                    label: 'b阿里b1',
                }, {
                    value: 'b啊啊啊b2',
                    label: 'b啊啊啊b2',
                }, {
                    value: 'b阿拉斯加b3',
                    label: 'b阿拉斯加b3',
                }, {
                    value: 'b阿骨打b4',
                    label: 'b阿骨打b4',
                }, {
                    value: 'b阿里b5',
                    label: 'b阿里b5',
                }, {
                    value: 'b啊啊啊b6',
                    label: 'b啊啊啊b6',
                }, {
                    value: 'b阿拉斯加b7',
                    label: 'b阿拉斯加b7',
                }, {
                    value: 'b阿骨打b8',
                    label: 'b阿骨打b8',
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
                    value: 'c阿里1',
                    label: 'c阿里1',
                }, {
                    value: 'c啊啊啊2',
                    label: 'c啊啊啊2',
                }, {
                    value: 'c阿拉斯加3',
                    label: 'c阿拉斯加3',
                }, {
                    value: 'c阿骨打4',
                    label: 'c阿骨打4',
                }, {
                    value: 'c阿里5',
                    label: 'c阿里5',
                }, {
                    value: 'c啊啊啊6',
                    label: 'c啊啊啊6',
                }, {
                    value: 'c阿拉斯加7',
                    label: 'c阿拉斯加7',
                }, {
                    value: 'c阿骨打8',
                    label: 'c阿骨打8',
                }
            ],
            D: [
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
                    value: '阿里1',
                    label: '阿里1',
                }, {
                    value: '啊啊啊2',
                    label: '啊啊啊2',
                }, {
                    value: '阿拉斯加3',
                    label: '阿拉斯加3',
                }, {
                    value: '阿骨打4',
                    label: '阿骨打4',
                }, {
                    value: '阿里5',
                    label: '阿里5',
                }, {
                    value: '啊啊啊6',
                    label: '啊啊啊6',
                }, {
                    value: '阿拉斯加7',
                    label: '阿拉斯加7',
                }, {
                    value: '阿骨打8',
                    label: '阿骨打8',
                }
            ],
            E: [
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
                    value: '阿里1',
                    label: '阿里1',
                }, {
                    value: '啊啊啊2',
                    label: '啊啊啊2',
                }, {
                    value: '阿拉斯加3',
                    label: '阿拉斯加3',
                }, {
                    value: '阿骨打4',
                    label: '阿骨打4',
                }, {
                    value: '阿里5',
                    label: '阿里5',
                }, {
                    value: '啊啊啊6',
                    label: '啊啊啊6',
                }, {
                    value: '阿拉斯加7',
                    label: '阿拉斯加7',
                }, {
                    value: '阿骨打8',
                    label: '阿骨打8',
                }

            ],
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
        const datas = this.ds.cloneWithRowsAndSections(this.overviewDataSource.dataBlob, this.overviewDataSource.sectionIDs.slice(), this.overviewDataSource.rowIDs.slice());
        console.log('====================================');
        console.log('fetchOverviewDatas =>', datas);
        console.log('====================================');
        return datas;
    }
}