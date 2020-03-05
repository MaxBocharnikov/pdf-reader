import HttpClient from './http.client';

export default class Api {

    static getFileData = async (file) => {
        // const response = await HttpClient.call('get',`${_BASE_URL}/getFileData`);
        // return response.data;
        console.log(file);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const testObj = {
                    constructionType: 'house',
                    drawingType: 'some drawing type',
                    section: 'someSection',
                    scale: 'someScale'
                };
                resolve(testObj);
            }, 2000)
        })
    }
}