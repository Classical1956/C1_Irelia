import {
    formParams,
} from './requestParams';
import { ResponseCode, C1ResponseFactory, C1ErrorFactory, C1Response } from './index';

const TIME_OUT = 10000;

/**
 * 
 * @param fetch fetchPromise
 * @param timeOut 超时Promise
 */
const timeOutRequest = async (fetch: Promise<any>, timeOut: number = TIME_OUT) => {
    let p = Promise.race([fetch, timeOutPromise()]);
    return p;
};

function timeOutPromise(timeOut: number = TIME_OUT) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            status: ResponseCode.NET_TIMEOUT,
            message: 'time out!'
        }));
    });
}

export const request = async (url: string, data?: object, headers?: object, method = 'GET'): Promise<C1Response> => {

    data = data || {};
    headers = headers || {};
    let requestParams;
    if (method === 'GET') {
        const query = formParams(data);
        url = url + '?' + query;
        requestParams = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
        };
    } else if (method === 'POST') {
        const body = JSON.stringify(data);
        requestParams = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body
        };
    } else {

    }

    const originResponse = await timeOutRequest(fetch(url, requestParams));

    console.log('====================================');
    console.log('请求url:', url);
    console.log('请求参数:', JSON.stringify(requestParams));
    console.log('返回参数:', originResponse);
    console.log('====================================');

    if (originResponse && originResponse.status === ResponseCode.NET_TIMEOUT) { // 超时处理
        let error = C1ErrorFactory(originResponse.status, originResponse.statusText);
        return C1ResponseFactory(false, originResponse.status, originResponse.status, null, error);
    }

    try {

        const response = await originResponse.json();

        console.log('====================================');
        console.log('请求url:', url);
        console.log('请求参数:', JSON.stringify(requestParams));
        console.log('返回参数:', response);
        console.log('====================================');

        if (originResponse.status === 200 || originResponse.status === 201) {
            return C1ResponseFactory(true, originResponse.status, ResponseCode.SUCCESS, response);
        } else {
            let error = C1ErrorFactory(ResponseCode.ANOTHER_ERROR, '莫名错误');
            return C1ResponseFactory(false, originResponse.status, ResponseCode.ANOTHER_ERROR, null, error);
        }

    } catch (error) {
        console.log('====================================');
        console.log('request error =>', error);
        console.log('====================================');
        let c1Error = C1ErrorFactory(ResponseCode.JSON_ERROR, '解析失败');
        return C1ResponseFactory(false, originResponse.status, ResponseCode.JSON_ERROR, null, c1Error, originResponse);
    }

};

export async function get(url: string, data?: object, headers?: object): Promise<C1Response> {
    return request(url, data, headers, 'GET');
}
export async function post(url: string, data?: object, headers?: object): Promise<C1Response> {
    return request(url, data, headers, 'POST');
}