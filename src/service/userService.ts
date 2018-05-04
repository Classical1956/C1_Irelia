import {
    ServicePaths
} from '../config';
import BaseService from './baseService';
import { C1Response } from '../net';

class UserService extends BaseService {
    /**
     * 获取用户信息
     */
    public fetchAuthenticatedUserInfo = async (): Promise<C1Response> => {
        return await this.get(ServicePaths.user.user);
    }

    /**
     * 获取当前登录用户 starred list
     */
    public fetchStarredRepositories = async (): Promise<C1Response> => {
        return await this.get(ServicePaths.user.starredRepositories);
    }

    /**
     * 获取 watched repositories list
     */
    public fetchWatchedRepositories = async (): Promise<C1Response> => {
        return await this.get(ServicePaths.user.watingRepositoriesList);
    }
}

export default new UserService();