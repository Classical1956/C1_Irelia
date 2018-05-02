export interface IPlan {
    collaborators: number;
    name: string;
    private_repos: number;
    space: number;
}

export interface IUser {
    avatar_url: string; // 头像
    bio: string; // 签名
    blog: string;
    collaborators: number;
    company: string;
    created_at: string; // 创建时间 2015-06-29T06:05:59Z
    updated_at: string; // 更新时间 2018-04-28T09:37:31Z
    disk_usage: number;
    email: string;

    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    organizations_url: string;
    received_events_url: string;
    starred_url: string;
    subscriptions_url: string;

    gravatar_id: string;
    html_url: string;
    id: number;
    location: string;
    login: string; // 登录用户名
    name: string; // 昵称
    owned_private_repos: number;
    plan: IPlan;
    private_gists: number;
    public_gists: number;
    public_repos: number;
    total_private_repos: number;
    site_admin: boolean;
    two_factor_authentication: boolean;
    type: string; // User
    url: string;

    // 自定义
    process_createTime?: string;
    process_updateTime?: string;
}