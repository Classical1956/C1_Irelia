import { Paths } from './index';

export default {
    authorization: Paths.apiDomain + 'authorizations',
    user: {
        user: Paths.apiDomain + 'user',
        starredRepositories: Paths.apiDomain + 'user/starred', // start 仓库列表
        watingRepositoriesList: Paths.apiDomain + 'user/subscriptions', // watch 仓库列表
    }
};