import {
    BaseStore
} from '../../base';
// import {
//     observable
// } from 'mobx';
import {
    ActivityService,
} from '../../service';
import { observable, computed, runInAction } from 'mobx';
import { ListView } from 'antd-mobile';

export default class ActivityStore extends BaseStore {

    @observable activityList = observable.array();

    private ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    loadData() {
        this.fetchGithubResponse();
    }

    public fetchGithubResponse = async () => {
        console.log('====================================');
        console.log('activityservice =>', ActivityService.listStarredRepos);
        console.log('====================================');
        try {
            const result: any[] = await ActivityService.listStarredRepos();
            console.log('====================================');
            console.log('sss =>', result);
            console.log('====================================');
            runInAction(() => {
                this.activityList.clear();
                this.activityList.push(...result);
            });
        } catch (error) {
            console.log('====================================');
            console.log('error =>', error);
            console.log('====================================');
        }

    }

    public fetsssss = () => { };

    @computed
    get fetchActivityList() {
        return this.ds.cloneWithRows(this.activityList.slice());
    }
}