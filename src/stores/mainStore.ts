import {
    observable,
    computed,
    action,
} from 'mobx';

export default class MainStore {
    @observable currentSelectedIndex: number = 0;

    @action
    updateCurrentSelectedIndex(index: number) {
        this.currentSelectedIndex = index;
    }
    @computed
    get fetchCurrentSelectedIndex() {
        return this.currentSelectedIndex;
    }
}