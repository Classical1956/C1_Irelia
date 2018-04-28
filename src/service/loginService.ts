/*
 * @Author: Classical_1956 
 * @Date: 2018-04-28 17:38:40 
 * @Last Modified by: Classical_1956
 * @Last Modified time: 2018-04-28 17:56:46
 */
import {
    ServicePaths
} from '../config';
import BaseService from './baseService';
import { Buffer } from 'buffer';
import { CacheService } from './index';
import { ApplicationConfig } from '../config';
import { C1Response } from '../net';

class LoginService extends BaseService {

    public login = async (userName: string, password: string): Promise<C1Response> => {

        const userBasicCode = new Buffer(userName + ':' + password).toString('base64');
        CacheService.saveBasicCode(userBasicCode);
        const params = {
            scopes: ['user', 'repo', 'gist'],
            note: 'study ts react',
            client_id: ApplicationConfig.CLIENT_ID,
            client_secret: ApplicationConfig.CLIENT_SECRET
        };
        const response = await this.post(ServicePaths.authorization, params);
        return response;
    }

}

export default new LoginService();