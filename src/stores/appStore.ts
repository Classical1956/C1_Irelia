import {
    MainStore,
    UserStore,
} from '../stores';

class AppStore {
    public mainStore: MainStore;
    public userStore: UserStore;
    constructor() {
        this.initStore();
    }

    private initStore() {
        this.mainStore = new MainStore();
        this.userStore = new UserStore();
    }

    public fetchMainStore() {
        return this.mainStore;
    }
}

export default new AppStore();