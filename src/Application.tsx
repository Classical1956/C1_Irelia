import React from 'react';
import { History } from 'history';
import {
    Route,
    Router,
} from 'react-router';
import {
    MainTab,
} from './pages';

interface ApplicationProps {
    history: History;
}

export default class Application extends React.Component<ApplicationProps> {

    public render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route exact={true} path="/" component={MainTab} />
            </Router>
        );
    }
}