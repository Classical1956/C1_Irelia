/*
 * @Author: Classical_1956 
 * @Date: 2018-04-27 18:04:00 
 * @Last Modified by: Classical_1956
 * @Last Modified time: 2018-04-28 17:59:44
 */
import { BaseStore } from '../../base';
import { observable, action, computed, runInAction } from 'mobx';
import { LoginService } from '../../service';
import { CacheService } from '../../service';
export default class LoginStore extends BaseStore {

    @observable
    userName = '';
    @observable
    passWord = '';

    constructor() {
        super();
        runInAction(() => {
            this.userName = CacheService.loadUserName() || '';
        });
    }

    @action
    updateUserName = (event: any) => {
        this.userName = event.target.value;
    }
    @action
    updatePassWord = (event: any) => {
        this.passWord = event.target.value;
    }
    @action
    loginAction = async (event: any) => {
        // event.preventDefault();
        const response = await LoginService.login(this.userName, this.passWord);
        if (response.result) {
            CacheService.saveUserName(this.userName);
        }

    }

    @computed
    get fetchSubmitDisable() {
        return !(this.userName.length && this.passWord.length);
    }
    @computed
    get fetchUserName(): string {
        return this.userName;
    }
}