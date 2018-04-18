import React from 'react';
import { RouteComponentProps } from 'react-router';
export interface IPageComponentProps<PS> extends RouteComponentProps<any> {
    pageStore?: PS; // BaseStore | null;
    route?: any;
}

export class PageClassComponent<PS, S> extends React.Component<IPageComponentProps<PS>, S> {

}
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