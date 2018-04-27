import {
    formParams,
} from './requestParams';

const TIME_OUT = 10000;

/**
 * 
 * @param fetch fetchPromise
 * @param timeOut 超时Promise
 */
const timeOutRequest = async (fetch: Promise<any>, timeOut: number = TIME_OUT) => {
    let p = Promise.race([fetch, timeOutPromise()]);
    console.log('====================================');
    console.log('timeOutRequest =>', p);
    console.log('====================================');
    return p;
};

function timeOutPromise(timeOut: number = TIME_OUT) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('timeout'), timeOut);
    });
}

export const request = async (url: string, data?: object, headers?: object, method = 'GET') => {

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

    try {
        const resultData = await timeOutRequest(fetch(url, requestParams));
        const response = await resultData.json();
        console.log('====================================');
        console.log('请求url:', url);
        console.log('请求参数:', JSON.stringify(requestParams));
        console.log('返回参数:', response);
        console.log('====================================');
        return response;
    } catch (error) {
        console.log('====================================');
        console.log('response error =>', error);
        console.log('====================================');
        return {};
    }

};

export async function get(url: string, data?: object, headers?: object): Promise<any> {
    return request(url, data, headers, 'GET');
}
export async function post(url: string, data?: object, headers?: object): Promise<any> {
    return request(url, data, headers, 'POST');
}