import { History } from 'history';

class PageRouter {
    protected history: History;

    public init(history: History) {
        this.history = history;
    }

    public loginOut() {
        this.history.push('/');
    }
    public signIn() {
        this.history.replace('/');
    }
}

export default new PageRouter();