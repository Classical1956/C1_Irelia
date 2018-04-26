
export const CacheKeys = {
    loginInfo: 'loginInfo',
};

class CacheService {
    public loadLoginInfo(): any {
        return sessionStorage.getItem(CacheKeys.loginInfo);
    }
    public saveLoginInfo(loginInfo: any) {
        sessionStorage.setItem(CacheKeys.loginInfo, JSON.stringify(loginInfo));
    }

    public clearDataByCacheKey(cacheKey: string) {
        sessionStorage.removeItem(cacheKey);
    }

}

export default new CacheService();