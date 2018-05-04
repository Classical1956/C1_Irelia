import {
    BaseStore
} from '../../base';
import { observable, computed, action, runInAction } from 'mobx';
import { IRepositories } from '../../interface';
import { UserService } from '../../service';

export default class HomeStore extends BaseStore {

    @observable
    starredList = observable.array<IRepositories>();

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
                this.starredList.clear();
                if (response.result) {
                    this.starredList.push(...response.data);
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
    get fetchStarrList() {
        return this.starredList.slice();
    }
}