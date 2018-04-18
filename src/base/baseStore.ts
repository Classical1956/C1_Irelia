import { IBaseStore } from '../interface';
import { observable, action, computed } from 'mobx';
import {
    LAYOUT_STATE
} from '../constants';

export default class BaseStore extends IBaseStore {

    @observable private layoutState: string = LAYOUT_STATE.LOADING;

    dispose() { }

    loadData() { }

    fetchPageParams() {
        return {};
    }

    @action
    showContent() {
        this.layoutState = LAYOUT_STATE.SUCESS;
    }
    @action
    showEmpty() {
        this.layoutState = LAYOUT_STATE.EMPTY;
    }
    @action
    showError() {
        this.layoutState = LAYOUT_STATE.ERROR;
    }
    @action
    showLoading() {
        this.layoutState = LAYOUT_STATE.LOADING;
    }

    @computed
    get isSuccessPage() {
        return this.layoutState === LAYOUT_STATE.SUCESS;
    }

    fetchLayoutState(): string {
        return this.layoutState;
    }

}