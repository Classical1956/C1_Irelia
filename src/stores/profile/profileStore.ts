
import { BaseStore } from '../../base';
import { UserService } from '../../service';
export default class ProfileStore extends BaseStore {

    loadData() {
        this.loadUserData();
    }

    private async loadUserData() {
        const response = await UserService.fetchAuthenticatedUserInfo();
        this.showContent();
        console.log('====================================');
        console.log('loadUserData =>', response);
        console.log('====================================');
    }
}