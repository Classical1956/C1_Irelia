import { History } from 'history';

class PageRouter {
    protected history: History;

    public init(history: History) {
        this.history = history;
    }

    public loginOut() {
        this.history.replace('/');
    }
    public signIn() {
        this.history.replace('/');
    }
}

export default new PageRouter();