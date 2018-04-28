
import { CacheService } from '../service';
export default class UserStore {

    public get isLogin(): boolean {
        return !!(CacheService.loadUserToken() || CacheService.loadBasicCode());
    }

}