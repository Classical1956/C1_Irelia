/*
 * @Author: Classical_1956 
 * @Date: 2018-05-07 09:10:53 
 * @Last Modified by: Classical_1956
 * @Last Modified time: 2018-05-07 16:27:29
 */
import React from 'react';
import { History } from 'history';
import {
    Route,
    Router,
    Switch,
    Redirect,
} from 'react-router';
import { AppStore } from './stores';
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
import {
    LoginPage
} from './pages/login';

interface ApplicationProps {
    history: History;
}

export default class Application extends React.Component<ApplicationProps> {
    public render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/" render={this.entryRender} />
                    <Route exact={true} path="/main" component={MainTab} />
                    <Route exact={true} path="/login" component={LoginPage} />
                    <Route path="/activity/detail/:resId" component={DetailPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        );
    }

    private entryRender = () => {
        let path = '/login';
        if (AppStore.userStore.isLogin) {
            path = '/main';
        }
        return (
            <Redirect to={path} />
        );
    }
}