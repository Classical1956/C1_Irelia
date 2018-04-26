import { Request } from '../net';

export default class BaseService {
    public async post(url: string, data?: object, headers?: object): Promise<any> {
        return Request.post(url, data, headers);
    }
}