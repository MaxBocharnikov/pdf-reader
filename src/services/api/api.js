import HttpClient from './http.client';
import {_BASE_URL} from '../../constants/http.client';

export default class Api {

    static getFileData = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await HttpClient.call('post', `${_BASE_URL}/documents`, formData);
        return response.data;
    }
}