
/**
 * 返回get需要的 格式化字符串
 * @param params option参数
 */
export function formParams(params: object = {}) {
    const ownKeys = Object.getOwnPropertyNames(params);
    const kvList = ownKeys.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    if (kvList) {
        return kvList.join('&');
    } else {
        return undefined;
    }
}