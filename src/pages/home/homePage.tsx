import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends React.PureComponent {
    public render() {
        console.log('====================================');
        console.log('render homepage props =>', this.props);
        console.log('====================================');
        return (
            <div onClick={this.onClick}>
                sss
            </div>
        );
    }

    private onClick = () => {
        window.location.href = 'http://www.baidu.com';
    }
}