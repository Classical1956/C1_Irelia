import { Request } from '../net';
import { CacheService } from './index';
import { C1Response } from '../net';

export default class BaseService {

    public async post(url: string, data?: object, headers: object = {}): Promise<C1Response> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        const response = await Request.post(url, data, headers);

        if (response.status === 201 && response.data.token) {
            const UserToken = 'token ' + response.data.token;
            console.log('====================================');
            console.log('UserToken =>', UserToken);
            console.log('====================================');
            CacheService.saveUserToken(UserToken);
        }
        return response;
    }
    public async get(url: string, data?: object, headers: object = {}): Promise<any> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        const response = await Request.post(url, data, headers);

        if (response.status === 201 && response.data.token) {
            const UserToken = 'token' + response.data.token;
            CacheService.saveUserToken(UserToken);
        }
        return response;
    }

    private fetchAuthorization() {
        const token = CacheService.loadUserToken();
        if (token) {
            return token;
        }

        const basicCode = CacheService.loadBasicCode();
        if (basicCode) {
            return `Basic ${basicCode}`;
        }
        return null;
    }

}