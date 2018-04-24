import React from 'react';
import { History } from 'history';
import {
    Route,
    Router,
    Switch,
} from 'react-router';
import {
    MainTab,
} from './pages';
import {
    NotFoundPage,
} from './pages/notfFound';
import {
    DetailPage,
} from './pages/activity';
import {
    ProfilePage
} from './pages/profile';

interface ApplicationProps {
    history: History;
}

export default class Application extends React.Component<ApplicationProps> {

    public render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/" component={MainTab} />
                    <Route path="/activity/detail/:resId" component={DetailPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        );
    }
}