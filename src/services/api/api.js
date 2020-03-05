import HttpClient from './http.client';

export default class Api {

    static getFileData = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await HttpClient.call('post',`http://kolbasa/wapi/documents`, formData);
        return response.data;
    }
}