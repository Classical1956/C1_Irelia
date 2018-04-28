import { Request } from '../net';
import { CacheService } from './index';

export default class BaseService {
    authorizationCode: string | null = null;

    public async post(url: string, data?: object, headers: object = {}): Promise<any> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        return Request.post(url, data, headers);
    }
    public get(url: string, data?: object, headers?: object): Promise<any> {

        const authorizationCode = this.fetchAuthorization();
        Object.assign(headers, {
            Authorization: authorizationCode,
        });

        return Request.get(url, data, headers);
    }

    private fetchAuthorization() {
        if (this.authorizationCode !== null) {
            return this.authorizationCode;
        }

        const token = CacheService.loadUserToken();
        console.log('====================================');
        console.log('token =>', token);
        console.log('====================================');
        if (token) {
            this.authorizationCode = token;
            return token;
        }

        const basicCode = CacheService.loadBasicCode();
        console.log('====================================');
        console.log('basic code =>', basicCode);
        console.log('====================================');
        if (basicCode) {
            return `Basic ${basicCode}`;
        }
        
        return null;
    }

}