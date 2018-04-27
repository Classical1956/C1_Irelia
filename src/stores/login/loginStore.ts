import { BaseStore } from '../../base';
import { observable, action, computed } from 'mobx';
import { CacheService } from '../../service';
export default class LoginStore extends BaseStore {

    @observable
    userName = '';
    @observable
    passWord = '';

    @action
    updateUserName = (event: any) => {
        this.userName = event.target.value;
    }
    @action
    updatePassWord = (event: any) => {
        this.passWord = event.target.value;
    }
    @action
    loginAction = () => {
        const loginInfo = {
            userName: this.userName,
            passWord: this.passWord,
        };
        CacheService.saveLoginInfo(loginInfo);
    }

    @computed
    get fetchSubmitDisable() {
        return !(this.userName.length && this.passWord.length);
    }
}