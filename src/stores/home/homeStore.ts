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
    watchedList = observable.array<IRepositories>();
    @observable
    tabTitles = [{
        title: 'Overview',
    }, {
        title: 'Discover'
    }];

    loadData() {
        this.loadStarredRepositories();
        this.loadWatchedRepositories();
    }

    @action
    async loadStarredRepositories() {
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

    @action
    async loadWatchedRepositories() {
        try {
            const response = await UserService.fetchWatchedRepositories();
            console.log('====================================');
            console.log('loadWatchedRepositories =>', response);
            console.log('====================================');
            runInAction(() => {
                this.watchedList.clear();
                if (response.result) {
                    this.watchedList.push(...response.data);
                } else {
                    // TODO: 处理error
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
    @computed
    get fetchWatchedList() {
        return this.watchedList.slice();
    }
}