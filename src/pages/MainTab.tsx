import React from 'react';
import {
    TabBar,
} from 'antd-mobile/lib';
import styles from './MianTab.scss';
import { observer } from 'mobx-react';
import {
    AppStore,
    MainStore,
} from '../stores';
import {
    HomePage,
} from './home';
import {
    ActivityPage,
} from './activity';

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
                    tintColor="#00c599"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="activity"
                        key="activity"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }} />
                        }
                        selected={this.pageStore.currentSelectedIndex === 0}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }} />
                        }
                        onPress={() => {
                            this.pageStore.updateCurrentSelectedIndex(0);
                        }}
                    >
                        <ActivityPage />
                    </TabBar.Item >

                    <TabBar.Item
                        title="response"
                        key="response"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }} />
                        }
                        selected={this.pageStore.currentSelectedIndex === 1}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }} />
                        }
                        onPress={() => {
                            this.pageStore.updateCurrentSelectedIndex(1);
                        }}
                    >
                        <HomePage />
                    </TabBar.Item >
                </TabBar>
            </div>
        );
    }
}
