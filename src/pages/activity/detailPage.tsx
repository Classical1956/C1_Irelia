import React from 'react';

export default class DetailPage extends React.PureComponent<any, any> {

    id: string;
    constructor(props: any) {
        super(props);
        const { match } = props;
        const { params } = match;
        console.log('====================================');
        console.log('id =>', params);
        console.log('====================================');
        this.id = params.resId;
    }

    public render() {
        console.log('render props =>', this.props);
        return (
            <div>
                <p onClick={this.goBack}>这是一个详情页面 id:{this.id}</p>
            </div>
        );
    }
    private goBack = () => {
        this.props.history && this.props.history.goBack();
    }
}