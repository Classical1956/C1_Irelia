import React from 'react';
import {
    BasePage
} from '../../base';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {
    ActivityStore,
} from '../../stores';

@observer
class ActivityPage extends BasePage {

    constructor(props: any) {
        super(props);
    }
    navigationTitle() {
        return 'activity';
    }
    showNavigationBar() {
        return false;
    }

    initPageStore() {
        this.pageStore = new ActivityStore();

        setTimeout(() => this.pageStore.showContent(), 1000);
    }

    public renderContent() {
        console.log('render props =>', this.props);
        return (
            <div>
                <p onClick={this.click}>activity</p>
            </div>
        );
    }

    private click = () => {
        let props: any = this.props;
        let id = Math.floor(Math.random() * 100);
        props.history.push(`/activity/detail/${id}`);
    }
}

export default withRouter(ActivityPage);