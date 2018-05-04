export interface IOwner {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: string;
}

export interface IPermissions {
    admin: boolean;
    push: boolean;
    pull: boolean;
}

export interface IRepositories {
    id: number;
    owner: IOwner;
    name: string;
    full_name: string;
    description: string;
    private: boolean;
    fork: boolean;
    url: string;
    html_url: string;
    homepage: string;
    language: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    default_branch: string;
    open_issues_count: number;
    topics: Array<string>;
    has_issues: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_downloads: boolean;
    archived: boolean;
    pushed_at: string; // push 时间
    created_at: string;
    updated_at: string;
    permissions: IPermissions;
    allow_rebase_merge: boolean;
    allow_squash_merge: boolean;
    allow_merge_commit: boolean;
    subscribers_count: number;
    network_count: number;
}