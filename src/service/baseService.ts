import { Request } from '../net';
import { CacheService } from './index';
import { C1Response } from '../net';

export default class BaseService {
    authorizationCode: string | null = null;

    public async post(url: string, data?: object, headers: object = {}): Promise<C1Response> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        const response = await Request.post(url, data, headers);

        if (response.status === 201 && response.data.token) {
            this.authorizationCode = 'token' + response.data.token;
            CacheService.saveUserToken(this.authorizationCode);
        }
        return response;
    }
    public async get(url: string, data?: object, headers?: object): Promise<any> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        const response = await Request.post(url, data, headers);

        if (response.status === 201 && response.data.token) {
            this.authorizationCode = 'token' + response.data.token;
            CacheService.saveUserToken(this.authorizationCode);
        }
        return response;
    }

    private fetchAuthorization() {
        if (this.authorizationCode !== null) {
            return this.authorizationCode;
        }

        const token = CacheService.loadUserToken();
        if (token) {
            this.authorizationCode = token;
            return token;
        }

        const basicCode = CacheService.loadBasicCode();
        if (basicCode) {
            return `Basic ${basicCode}`;
        }
        return null;
    }

}