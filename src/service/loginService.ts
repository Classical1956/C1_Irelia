import {
    ServicePaths
} from '../config';
import BaseService from './baseService';
import { Buffer } from 'buffer';
import { CacheService, CacheKeys } from './index';
import { ApplicationConfig } from '../config';

class LoginService extends BaseService {

    public login = async (userName: string, password: string): Promise<any> => {

        CacheService.clearDataByCacheKey(CacheKeys.USER_TOKEN);
        CacheService.clearDataByCacheKey(CacheKeys.USER_BASIC);
        CacheService.clearDataByCacheKey(CacheKeys.LOGIN_INFO);

        const userBasicCode = new Buffer(userName + ':' + password).toString('base64');
        CacheService.saveBasicCode(userBasicCode);
        const params = {
            scopes: ['user', 'repo', 'gist'],
            note: 'study ts react',
            client_id: ApplicationConfig.CLIENT_ID,
            client_secret: ApplicationConfig.CLIENT_SECRET
        };
        const result = await this.post(ServicePaths.authorization, params);
        if (result) {
            CacheService.saveLoginInfo({
                userName,
                password,
            });
            
        }
    }

}

export default new LoginService();