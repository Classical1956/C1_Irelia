import { Paths } from './index';
export default class ServicePaths {
    /**
     * 获取授权接口
     */
    static get authorization(): string {
        return Paths.apiDomain + 'authorizations';
    }

    /**
     * 获取用户信息
     */
    static get userInfo(): string {
        return Paths.apiDomain + 'user';
    }
}