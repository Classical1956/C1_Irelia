import {
    ServicePaths
} from '../config';
import BaseService from './baseService';
import { C1Response } from '../net';

class UserService extends BaseService {
    public fetchAuthenticatedUserInfo = async (): Promise<C1Response> => {
        return await this.get(ServicePaths.userInfo);
    }
}

export default new UserService();