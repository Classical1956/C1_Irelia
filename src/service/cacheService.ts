
export const CacheKeys = {
    USER_NAME: 'USER_NAME',
    LOGIN_INFO: 'LOGIN_INFO',
    USER_BASIC: 'USER_BASIC',
    USER_TOKEN: 'USER_TOKEN',
};

class CacheService {
    public clearDataByCacheKey(cacheKey: string) {
        sessionStorage.removeItem(cacheKey);
    }
    /**
     * loginInfo
     */
    public loadLoginInfo(): any {
        return sessionStorage.getItem(CacheKeys.LOGIN_INFO);
    }
    public saveLoginInfo(loginInfo: any) {
        sessionStorage.setItem(CacheKeys.LOGIN_INFO, JSON.stringify(loginInfo));
    }
    /**
     *  保存用户名
     */
    public saveUserName(userName: string): void {
        sessionStorage.setItem(CacheKeys.USER_NAME, userName);
    }
    public loadUserName(): string | null {
        return sessionStorage.getItem(CacheKeys.USER_NAME);
    }

    /**
     * basic code
     */
    public saveBasicCode(basicCode: string) {
        sessionStorage.setItem(CacheKeys.USER_BASIC, basicCode);
    }
    public loadBasicCode() {
        return sessionStorage.getItem(CacheKeys.USER_BASIC);
    }
    /**
     * token
     */
    public saveUserToken(userToken: string) {
        sessionStorage.setItem(CacheKeys.USER_TOKEN, userToken);
    }
    public loadUserToken(): string | null {
        return sessionStorage.getItem(CacheKeys.USER_TOKEN);
    }

    /**
     * 登出时 清除操作
     */
    public loginOut() {
        this.clearDataByCacheKey(CacheKeys.USER_BASIC);
        this.clearDataByCacheKey(CacheKeys.USER_TOKEN);
    }

}

export default new CacheService();