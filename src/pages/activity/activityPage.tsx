import React from 'react';
import { inject } from 'mobx-react';
// import { withRouter } from 'react-router-dom';
@inject('history')
export default class ActivityPage extends React.PureComponent<any, any> {

    public render() {
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

// export default withRouter(ActivityPage);