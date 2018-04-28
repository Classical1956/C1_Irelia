
export enum ResponseCode {
    NET_TIMEOUT = -1992,
    SUCCESS = 0,
    ANOTHER_ERROR = -1990,
    JSON_ERROR = -1991,
}

export interface C1Response {
    result: boolean;
    code: number;
    data: any;
    error: C1Error | undefined;
    response?: any;
}
export interface C1Error {
    errorCode: number;
    errorMessage: string;
}

/**
 * 构建 response
 * @param result  结果 false true
 * @param code response Code, success,failed, net Timeout
 * @param data 数据
 * @param error error
 * @param response originResponse
 */
export function C1ResponseFactory(result: boolean, code: number, data: any, error?: C1Error, response?: any): C1Response {
    return {
        result: result,
        code: code,
        data: data,
        error: error,
        response: response
    };
}

/**
 * 构建error
 * @param errorCode 错误码
 * @param errorMessage 错误信息
 */
export function C1ErrorFactory(errorCode: number, errorMessage: string): C1Error {
    return {
        errorCode,
        errorMessage,
    };
}