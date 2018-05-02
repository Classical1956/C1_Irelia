
import { BaseStore } from '../../base';
import { UserService } from '../../service';
import { IUser } from '../../interface';
import { observable, runInAction, computed } from 'mobx';
import { Toast } from 'antd-mobile';
import { PageRouter, AppStore } from '../../stores';
import { CacheService } from '../../service';
import { messageTime } from '../../utils';

export default class ProfileStore extends BaseStore {
    @observable
    profileUser: IUser;

    loadData() {
        this.loadUserData();
    }

    private async loadUserData() {
        const response = await UserService.fetchAuthenticatedUserInfo();
        if (response.result) {
            console.log('====================================');
            console.log('loadUserData =>', response);
            console.log('====================================');
            runInAction(() => {

                this.profileUser = response.data;
                const createTime = messageTime(this.profileUser.created_at);
                const updateTime = messageTime(this.profileUser.updated_at);
                this.profileUser.process_createTime = createTime;
                this.profileUser.process_updateTime = updateTime;

            });
        } else {
            Toast.show(response.error.errorMessage);
        }

        this.showContent();
    }

    public loginOut = async () => {
        CacheService.loginOut();
        PageRouter.loginOut();
        AppStore.mainStore.updateCurrentSelectedIndex(0);
    }

    @computed
    get fetchUserInfo() {
        return this.profileUser;
    }
}