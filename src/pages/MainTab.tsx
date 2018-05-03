/*
 * @Author: Classical_1956 
 * @Date: 2018-04-27 14:18:27 
 * @Last Modified by:   Classical_1956 
 * @Last Modified time: 2018-04-27 14:18:27 
 */
import React from 'react';
import {
    TabBar,
} from 'antd-mobile/lib';
import styles from './MianTab.scss';
import { observer } from 'mobx-react';
import { GlobalStyles } from '../styles';
import {
    TAB_ICON,
} from '../constants';
import { C1Icon } from '../component/common';
import {
    AppStore,
    MainStore,
} from '../stores';
import {
    ProfilePage
} from './profile';
import {
    HomePage,
} from './home';

@observer
export default class MainTab extends React.PureComponent {

    pageStore: MainStore;

    constructor(props: any) {
        super(props);
        this.pageStore = AppStore.fetchMainStore();
    }

    public render() {
        return (
            <div className={styles.mainTab}>
                <TabBar
                    className={styles.Bar}
                    unselectedTintColor="#91919c"
                    tintColor={GlobalStyles.colors.primary}
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="github"
                        key="github"
                        icon={this.renderIcon(0, false)}
                        selected={this.pageStore.currentSelectedIndex === 0}
                        selectedIcon={this.renderIcon(0, true)}
                        onPress={() => {
                            this.pageStore.updateCurrentSelectedIndex(0);
                        }}
                    >
                        <HomePage />
                    </TabBar.Item >

                    <TabBar.Item
                        title="profile"
                        key="profile"
                        icon={this.renderIcon(1, false)}
                        selected={this.pageStore.currentSelectedIndex === 1}
                        selectedIcon={this.renderIcon(1, true)}
                        onPress={() => {
                            this.pageStore.updateCurrentSelectedIndex(1);
                        }}
                    >
                        <ProfilePage />
                    </TabBar.Item >
                </TabBar>
            </div>
        );
    }

    private renderIcon = (index: number, selected: boolean) => {
        let iconName = TAB_ICON[index];
        return (
            <C1Icon
                className={styles.tabIcon}
                iconName={iconName}
            />
        );
    }
}
