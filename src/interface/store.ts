
export abstract class IBaseStore {
    abstract dispose(): any;

    abstract fetchPageParams(): any;

    abstract loadData(): any;

    abstract fetchLayoutState(): string;

    abstract showLoading(): any;
    abstract showContent(): any;
    abstract showEmpty(): any;
    abstract showError(): any;
}