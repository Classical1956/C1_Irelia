import { Paths } from './index';

export default {
    authorization: Paths.apiDomain + 'authorizations',
    user: {
        user: Paths.apiDomain + 'user',
        starredRepositories: Paths.apiDomain + 'user/starred',
    }
};