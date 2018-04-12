import {
    MainStore,
} from '../stores';

class AppStore {
    public mainStore: MainStore;

    constructor() {
        this.initStore();
    }

    private initStore() {
        this.mainStore = new MainStore();
    }

    public fetchMainStore() {
        return this.mainStore;
    }
}

export default new AppStore();