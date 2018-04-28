import React from 'react';
import {
    observer
} from 'mobx-react';
import {
    BaseStore
} from '../base';
import {
    IBaseStore,
} from '../interface';
import styles from './basePage.scss';
import {
    LAYOUT_STATE
} from '../constants';
import {
    NavBar,
} from 'antd-mobile';
import {
    StateLayout
} from '../component';

@observer
export default class BasePage<PS extends IBaseStore> extends React.PureComponent<any, any> {
    protected pageStore: BaseStore;

    protected routeParams: any;

    constructor(props: any) {
        super(props);
        const { params } = props.match;
        this.routeParams = params;
    }

    componentWillUnmount() {
        this.pageStore && this.pageStore.dispose && this.pageStore.dispose();
    }
    componentWillMount() {
        this.initPageStore();
    }
    componentDidMount() {
        this.pageStore && this.pageStore.loadData();
    }

    public initPageStore() {
        this.pageStore = new BaseStore();
    }

    render() {
        return (
            <div className={styles.basePage}>
                {this.showNavigationBar() ? this.renderNavigationBar() : undefined}
                {this.pageStore.isSuccessPage ? this.renderContent() : this.renderStateLayout()}
            </div>
        );
    }

    /**
     *  render业务内容
     */
    renderContent() {
        return (
            <div>
                homepage
            </div>
        );
    }
    showAsStaticPage() {
        this.pageStore.showContent();
    }

    // === customer NavigationBar
    renderNavigationBar() {
        return (
            <NavBar
                mode={this.navigationMode()}
                icon={this.leftBackIcon()}
                leftContent={this.navigationBarLeftContent()}
                rightContent={this.navigationBarRightContent()}
            >
                {this.navigationTitle()}
            </NavBar>
        );
    }
    showNavigationBar() {
        return true;
    }
    navigationTitle() {
        return '基本操作';
    }
    navigationMode(): 'light' | 'dark' {
        return 'light';
    }
    leftBackIcon() {
        return undefined;
    }
    navigationBarLeftContent() {
        return 'Back';
    }
    navigationBarRightContent() {
        return undefined;
    }
    onLeftClick(e: object) {
        this.props.history && this.props.histoty.goBack();
    }

    /** render statelayout */
    private renderStateLayout() {
        return (
            <StateLayout
                layouState={this.pageStore.fetchLayoutState()}
                stateImg={this.fetchStateImg()}
                stateTip={this.fetchStateTip}
                onRetry={this.onRetry}
            />
        );
    }
    fetchStateImg() {
        return this.pageStore.fetchLayoutState() === LAYOUT_STATE.EMPTY ? this.fetchEmptyImg() : this.fetchErrorImg();
    }
    fetchStateTip() {
        return this.pageStore.fetchLayoutState() === LAYOUT_STATE.EMPTY ? this.fetchEmptyTip() : this.fetchErrorTip();
    }
    fetchEmptyImg() {
        return undefined;
    }
    fetchEmptyTip() {
        return '暂无数据';
    }
    fetchErrorImg() {
        return undefined;
    }
    fetchErrorTip() {
        return '请稍后重试';
    }
    onRetry() {
        this.pageStore.loadData();
    }
}