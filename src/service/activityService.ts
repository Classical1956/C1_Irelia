import {
    Request
} from '../net';
import {
    Paths
} from '../config';

export function listStarredRepos(): Promise<Array<any>> {

    let requestUrl = Paths.apiDomain + `/users/Classical1956/starred`;
    console.log('====================================');
    console.log('requestUrl =>', requestUrl);
    console.log('====================================');
    return Request.get(requestUrl);
}