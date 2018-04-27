import {
    Paths
} from '../config';
import BaseService from './baseService';

class ActivityService extends BaseService {
    constructor() {
        super();
    }
    public listStarredRepos(): Promise<Array<any>> {
        let requestUrl = Paths.apiDomain + `/users/Classical1956/starred`;
        console.log('====================================');
        console.log('requestUrl =>', requestUrl);
        console.log('====================================');
        return this.get(requestUrl);
    }
}

export default new ActivityService();