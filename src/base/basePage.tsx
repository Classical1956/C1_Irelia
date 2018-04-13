import React from 'react';
import {
    observer
} from 'mobx-react';
import {
    IBaseStore
} from '../interface';

@observer
export default class BasePage<PS extends IBaseStore> extends React.PureComponent {
    protected pageStore: PS;

    protected routeParams: any;

    constructor(props: any) {
        super(props);
        const { params } = props.match;
        this.routeParams = params;
    }

    componentWillUnmount() {
        this.pageStore && this.pageStore.dispose && this.pageStore.dispose();
    }
}